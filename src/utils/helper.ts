export function xmlToJson(xml: any) {
    var obj: any = {};

    if (xml.nodeType === Node.ELEMENT_NODE) {
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType === Node.TEXT_NODE) {
        obj = xml.nodeValue.trim();
    }

    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;

            if (!item.hasChildNodes() && !item.attributes?.length) {
                obj[nodeName] = item.nodeValue;
            } else {
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