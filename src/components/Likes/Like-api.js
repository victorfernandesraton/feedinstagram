import React from 'react';

const getLikes = async (idPub, idUser) => {
    const response = await apiMock.post(/likes?parent${idPub}%${idUser})

    return response;
}