import React from 'react';
import RegisterCertificate from './components/RegisterCertificate';
import GetCertificate from './components/GetCertificate';
import RevokeCertificate from './components/RevokeCertificate';

const App: React.FC = () => {
    return (
        <div>
            <h1>Sistema de Certificados</h1>
            <RegisterCertificate />
            <GetCertificate />
            <RevokeCertificate />
        </div>
    );
};

export default App;
