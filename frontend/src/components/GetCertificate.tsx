import React, { useState } from 'react';
import certificateContract from '../CertificateContract';

interface CertificateData {
    id: string;
    studentName: string;
    course: string;
    issueDate: string;
    isValid: boolean;
}

const GetCertificate: React.FC = () => {
    const [id, setId] = useState('');
    const [certificate, setCertificate] = useState<CertificateData | null>(null);
    const [message, setMessage] = useState('');

    const getCertificate = async () => {
        setMessage("Consultando o certificado...");

        try {
            // Definindo o tipo do retorno esperado como uma tupla
            const cert: [BigInt, string, string, BigInt, boolean] = await certificateContract.methods.getCertificate(id).call();

            setCertificate({
                id: cert[0].toString(),
                studentName: cert[1],
                course: cert[2],
                issueDate: new Date(Number(cert[3]) * 1000).toLocaleDateString(),
                isValid: cert[4],
            });
            setMessage("");
        } catch (error) {
            console.error(error);
            setMessage("Erro ao consultar o certificado.");
            setCertificate(null);
        }
    };

    return (
        <div>
            <h2>Consultar Certificado</h2>
            <input placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={getCertificate}>Consultar</button>
            {message && <p>{message}</p>}
            {certificate && (
                <div>
                    <p>ID: {certificate.id}</p>
                    <p>Nome do Aluno: {certificate.studentName}</p>
                    <p>Curso: {certificate.course}</p>
                    <p>Data de Emissão: {certificate.issueDate}</p>
                    <p>Status: {certificate.isValid ? "Válido" : "Revogado"}</p>
                </div>
            )}
        </div>
    );
};

export default GetCertificate;
