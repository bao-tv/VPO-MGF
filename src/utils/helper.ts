export function xmlToJson(xml: any) {
    // Create the return object
    var obj: any = {};

    if (xml.nodeType === Node.ELEMENT_NODE) { // Element node
        // If the element has attributes, add them to the object
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType === Node.TEXT_NODE) { // Text node
        obj = xml.nodeValue.trim();
    }

    // If there are child nodes, iterate over them
    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;

            // If the node has no children and attributes, store it as text value
            if (!item.hasChildNodes() && !item.attributes?.length) {
                obj[nodeName] = item.nodeValue;
            } else {
                // If this is not the first occurrence of the node, transform it into an array
                if (obj[nodeName] === undefined) {
                    obj[nodeName] = xmlToJson(item);
                } else {
                    if (obj[nodeName].push === undefined) {
                        var old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(xmlToJson(item));
                }
            }
        }
    }
    return obj;
}