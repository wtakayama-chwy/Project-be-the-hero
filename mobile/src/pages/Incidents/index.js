import React, { useState, useEffect } from 'react';
// View = <div> | FlatList = substitute View to able scroll | TouchableOpacity = <button+hover>
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'; 
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import api from '../../services/api';

import logoImg from '../../assets/logo.png'; // There're 3 logos - DPI smartphones differs

import styles from './styles';

function Incidents(){
    const [ incidents, setIncidents ] = useState([]); // watch state and fills the array
    const [ total, setTotal ] = useState(0); // Total of cases
    const [ page, setPage ] = useState(1); // Initiate in page 1 - INFINIT SCROLL
    const [ loading, setLoading ] = useState(false); // Load 1 page per time
    
    const navigation = useNavigation(); // Similar history

    function navigateToDetail(incident){
        navigation.navigate('Detail', { incident }); // send the info incident to page detail
    }

    async function loadIncidents(){

        if(loading){
            return; // avoid user to try to pull more info while loading the incidents
        }

        if(total > 0 && incidents.length === total){ // just load what is necessary
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', {
            params: { page }
        });

        setIncidents([...incidents, ...response.data]); // Take the response.data and put in a state - One array including more incidents
        setTotal(response.headers['x-total-count']); // CamelSensitive
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList 
                data={incidents} // Array getted with axios API on 'incidents'
                style={styles.incidentsList}
                keyExtractor={incident => String(incident.id)} // Important! The unique value = id!
                // showsVerticalScrollIndicator={false} // Hide your scroll
                onEndReached={loadIncidents} // Call loadIncidents functions to load automatically
                onEndReachedThreshold={0.2} // 20% on end of the list then load more items
                renderItem={({ item: incident }) => ( // item = incident contain all data
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>
                        
                        <Text style={styles.incidentProperty}>CASO</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>VALOR</Text>
                        <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR', { 
                                style: 'currency', 
                                currency: 'BRL' 
                            }).format(incident.value)}
                        </Text>

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={() => navigateToDetail(incident)} // Must be arrow function, else it'll execute immediately
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041"></Feather>
                        </TouchableOpacity>
                    </View>
                )} // Function responsible to render each item of array - MUST USE ()
            />
        </View>
    );
}

export default Incidents;