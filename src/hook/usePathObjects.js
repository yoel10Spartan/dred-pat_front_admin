// Remove the '--', '__' and '/' from the path.
// Returns the path items in an object with a respective 'id'.

export const usePathObjects = (pathname) => {
    const items_locations = pathname.split(/--|\//);
    items_locations.splice(0,1);

    const items = [];
    for(let i of items_locations){
        let ob_item = {};
        let id = Math.floor(Math.random() * 100);
        ob_item.id = id;
        ob_item.name = i.replaceAll('__', ' ');
        items.push(ob_item);
    }

    return items
}