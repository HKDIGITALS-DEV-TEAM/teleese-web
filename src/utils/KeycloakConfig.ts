import Keycloak from 'keycloak-js';

const keycloakInstance = new Keycloak({
    realm: 'Teleese',
    url: 'http://localhost:8080',
    clientId: 'teleese-frontend',
});

export default keycloakInstance;
