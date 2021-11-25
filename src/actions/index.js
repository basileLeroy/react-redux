export const create = (name, text) => {
    return {
        type: "CREATE",
        Payload: {
            name, text
        }
    }
};

export const update = (id, name, text, status) => {
    return {
        type: "UPDATE",
        Payload: {
            id, name, text, status
        }
    }
};

export const remove = (id) => {
    return {
        type: "DELETE",
        Payload: {id}
    }
};
