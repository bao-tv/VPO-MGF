import { useEffect, useState } from 'react';
import {xmlToJson} from '../../utils'

function MyComponent() {
    const [xmlData, setXmlData] = useState(null);
    console.log('bao xmlData: ', xmlData);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/xml.xml');
            const text = await response.text();

            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(text, 'text/xml');

            const parsedData: any = xmlToJson(xmlDoc);
            setXmlData(parsedData);
        }
        fetchData();
    }, []);

    // Function to convert XML to JSON

    return (
        <div>
            <pre>{JSON.stringify(xmlData, null, 2)}</pre>
        </div>
    );
}

export default MyComponent;
