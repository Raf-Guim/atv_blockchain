import React, { useState } from 'react';
import certificateContract from '../CertificateContract';
import web3 from '../web3';

const RevokeCertificate: React.FC = () => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');

    const revokeCertificate = async () => {
        setMessage("Revogando o certificado...");

        try {
            const accounts = await web3.eth.getAccounts();
            await certificateContract.methods.revokeCertificate(id)
                .send({ from: accounts[0] });

            setMessage("Certificado revogado com sucesso!");
        } catch (error) {
            console.error(error);
            setMessage("Erro ao revogar o certificado.");
        }
    };

    return (
        <div>
            <h2>Revogar Certificado</h2>
            <input placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={revokeCertificate}>Revogar</button>
            <p>{message}</p>
        </div>
    );
};

export default RevokeCertificate;
