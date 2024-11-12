import React, { useState } from 'react';
import certificateContract from '../CertificateContract';
import web3 from '../web3';

const RegisterCertificate: React.FC = () => {
    const [id, setId] = useState('');
    const [studentName, setStudentName] = useState('');
    const [course, setCourse] = useState('');
    const [message, setMessage] = useState('');

    const registerCertificate = async () => {
        setMessage("Registrando o certificado...");

        try {
            const accounts = await web3.eth.getAccounts();
            await certificateContract.methods.registerCertificate(id, studentName, course)
                .send({ from: accounts[0] });

            setMessage("Certificado registrado com sucesso!");
        } catch (error) {
            console.error(error);
            setMessage("Erro ao registrar o certificado.");
        }
    };

    return (
        <div>
            <h2>Registrar Certificado</h2>
            <input placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
            <input placeholder="Nome do Aluno" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
            <input placeholder="Curso" value={course} onChange={(e) => setCourse(e.target.value)} />
            <button onClick={registerCertificate}>Registrar</button>
            <p>{message}</p>
        </div>
    );
};

export default RegisterCertificate;
