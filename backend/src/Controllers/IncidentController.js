const connection = require('../database/connection');

module.exports = {
    // GET
    async index(request, response){
        const { page = 1 } = request.query; // params, default page = 1

        const [count] = await connection('incidents').count(); // Count total number of cases

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') // Relate data from other tables
            .limit(5) // Limit the request to 5 (avoid overload)
            .offset((page - 1) * 5) // Page 1 = list 5 first, Page 2 = list 5 more
            .select([
                'incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf']); // Return the ongs data!

        response.header('X-Total-Count', count['count(*)']); // Add response on INSOMNIA HEADER

        return response.json(incidents);
    },
    // POST
    async create(request, response){
        const { title, description, value } = request.body;
        // Which ONG is logged comes from the HEADER! (Comes authentications, localizations)
        const ong_id = request.headers.authorization; // HEADER created on INSOMNIA

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });
        return response.json({ id });
    },
    // DELETE
    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization; 

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        if(incident.ong_id !== ong_id){
            return response.status(401).json({ error: 'Operation not permitted'}); // Status not authorized
        }
        await connection('incidents').where('id', id).delete();

        return response.status(204).send(); // Response success but has no content
    }

}