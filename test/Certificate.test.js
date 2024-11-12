const Certificate = artifacts.require("Certificate");

contract("Certificate", (accounts) => {
    let certificateInstance;

    // Teste de registro de certificado
    it("deve registrar um novo certificado", async () => {
        certificateInstance = await Certificate.deployed();
        await certificateInstance.registerCertificate(1, "João Silva", "Engenharia", { from: accounts[0] });
        const cert = await certificateInstance.getCertificate(1);
        
        assert.equal(cert[0].toNumber(), 1, "O ID do certificado deve ser 1");
        assert.equal(cert[1], "João Silva", "O nome do aluno deve ser João Silva");
        assert.equal(cert[2], "Engenharia", "O curso deve ser Engenharia");
        assert.equal(cert[4], true, "O status do certificado deve ser válido");
    });

    // Teste de consulta de certificado
    it("deve consultar um certificado existente", async () => {
        const cert = await certificateInstance.getCertificate(1);
        
        assert.equal(cert[0].toNumber(), 1, "O ID do certificado deve ser 1");
        assert.equal(cert[1], "João Silva", "O nome do aluno deve ser João Silva");
        assert.equal(cert[2], "Engenharia", "O curso deve ser Engenharia");
        assert.equal(cert[4], true, "O status do certificado deve ser válido");
    });

    // Teste de revogação de certificado
    it("deve revogar um certificado existente", async () => {
        await certificateInstance.revokeCertificate(1, { from: accounts[0] });
        const cert = await certificateInstance.getCertificate(1);
        
        assert.equal(cert[4], false, "O status do certificado deve ser inválido após a revogação");
    });

    // Teste de erro ao registrar certificado já existente
    it("deve falhar ao tentar registrar um certificado já existente", async () => {
        try {
            await certificateInstance.registerCertificate(1, "Maria Santos", "Matemática", { from: accounts[0] });
            assert.fail("Deveria ter lançado um erro");
        } catch (error) {
            assert.include(error.message, "Certificado já registrado", "O erro deve conter 'Certificado já registrado'");
        }
    });

    // Teste de erro ao consultar certificado inexistente
    it("deve falhar ao consultar um certificado inexistente", async () => {
        try {
            await certificateInstance.getCertificate(999);
            assert.fail("Deveria ter lançado um erro");
        } catch (error) {
            assert.include(error.message, "Certificado não encontrado", "O erro deve conter 'Certificado não encontrado'");
        }
    });
});
