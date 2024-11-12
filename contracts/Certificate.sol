// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Certificate {
    struct CertificateData {
        uint id;
        string studentName;
        string course;
        uint256 issueDate;
        bool isValid;
    }

    mapping(uint => CertificateData) private certificates;

    event CertificateRegistered(
        uint id,
        string studentName,
        string course,
        uint256 issueDate
    );

    event CertificateRevoked(uint id);

    function registerCertificate(
        uint _id,
        string memory _studentName,
        string memory _course
    ) public {
        require(
            certificates[_id].issueDate == 0,
            unicode"Certificado já registrado."
        );

        certificates[_id] = CertificateData({
            id: _id,
            studentName: _studentName,
            course: _course,
            issueDate: block.timestamp,
            isValid: true
        });

        emit CertificateRegistered(_id, _studentName, _course, block.timestamp);
    }

    function getCertificate(
        uint _id
    ) public view returns (uint, string memory, string memory, uint256, bool) {
        require(
            certificates[_id].issueDate != 0,
            unicode"Certificado não encontrado."
        );

        CertificateData memory cert = certificates[_id];
        return (
            cert.id,
            cert.studentName,
            cert.course,
            cert.issueDate,
            cert.isValid
        );
    }

    function revokeCertificate(uint _id) public {
        require(
            certificates[_id].issueDate != 0,
            unicode"Certificado não encontrado."
        );
        require(
            certificates[_id].isValid == true,
            unicode"Certificado já revogado."
        );

        certificates[_id].isValid = false;

        emit CertificateRevoked(_id);
    }
}
