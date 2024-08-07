const generateLabel = ( type: string ) => {
    return type.replace(/_/g, " ")
}

export default generateLabel