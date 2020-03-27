import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'; // Pick some fix constants

export default StyleSheet.create({

    container:{
        flex: 1,
        paddingHorizontal: 24, 
        paddingTop: Constants.statusBarHeight + 6,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    headerText:{
        fontSize: 15,
        color: '#737380',
    },
    headerTextBold:{
        fontWeight: 'bold',
    },
    title:{
        fontSize: 30,
        marginBottom: 16,
        marginTop: 28,
        color: '#13131a',
        fontWeight: 'bold',
    },
    description:{
        fontSize: 16,
        lineHeight: 18,
        color: '#737380',
    },
    incidentList:{
        marginTop: 32,
    },
    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    incidentProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },
    incidentValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom: 12,
        color: '#737380',
    },
    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsButtonText:{
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold',
    }

});