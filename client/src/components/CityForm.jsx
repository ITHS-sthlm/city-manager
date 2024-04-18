// Importera nödvändiga bibliotek och funktioner från React och andra paket.
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Används för att göra HTTP-begäranden.
import { List, ListItem, ListItemText } from '@mui/material'; // MUI-komponenter för att visa listan.

// En funktionell komponent som representerar en lista över städer.
const CityList = () => {
    // Skapa en "state" variabel för att lagra städer, initialt tom array.
    const [cities, setCities] = useState([]);

    // Använd useEffect-hook för att hämta städer när komponenten renderas.
    useEffect(() => {
        // En inre funktion för att hämta data från API:et.
        const fetchData = async () => {
            try {
                // Anropar API:et för att hämta städer.
                const response = await axios.get('http://localhost:3000/cities');
                // Uppdaterar städer i state med den hämtade datan.
                setCities(response.data);
            } catch (error) {
                // Hantera fel om något inträffar under hämtningen.
                console.error('Ett fel uppstod:', error);
            }
        };
        // Anropa fetchData-funktionen när komponenten renderas för första gången.
        fetchData();
    }, []); // Använd en tom array som beroende för att bara köra effekten vid mount.

    // Rendera listan med städer.
    return (
        <List>
            {cities.map(city => (
                // Använd React.Fragment för att gruppera listelementen.
                <React.Fragment key={city.id}>
                    {/* Rendera varje stad som ett ListItem med dess namn och befolkning */}
                    <ListItem>
                        <ListItemText primary={city.name} secondary={`Population: ${city.population}`} />
                    </ListItem>
                </React.Fragment>
            ))}
        </List>
    );
};

// Exportera CityList-komponenten för att kunna använda den i andra delar av appen.
export default CityList;
