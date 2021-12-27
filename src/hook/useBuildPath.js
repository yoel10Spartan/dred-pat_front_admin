const buildPath = (itemsObjectWithId, idToCut, itemStartPath, deleteFirstItem=true) => {
    let reconstructedPath = itemStartPath;
    if(deleteFirstItem){
        itemsObjectWithId.shift();
    }
    for(let i of itemsObjectWithId){
        if(i.id !== idToCut){
            reconstructedPath = reconstructedPath.concat(i.name.replaceAll(' ', '__'), '--');
        }else{
            reconstructedPath = reconstructedPath.concat(i.name.replaceAll(' ', '__'));
            break;
        }
    }
    return reconstructedPath
}

export const useBuildPath = () => {
    return buildPath
}