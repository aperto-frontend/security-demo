# attacker

## Agenda
* HTTP
    * Wifi Hotspot
    * every request in plain text
* Basic XSS attack
    * try comment fields with different script injections
    * script worked
* Uploads SVG image -> CSRF
    * tries out routes
    * found out that there is a user create route with method post
    * embed svg with post to create a user with credentials
    * can now log in with more privileges
* Embed tracking lib
    * Attacker calls project owner because he want to do some advertising on their site
    * Project owner agrees and Attacker asks him to embed tracking for a while to see how the page performs
    * Attacker gets all types of infos, including credit card infos, logins and so on
* Create Fishing Page
    * Reverse Tabnapping using target="blank" without norefer, noopener 
    ```
    if (window.opener) {
      window.opener.location = "https://phish.example.com";
    }
    ```
 

## Possible vulnerabilities:
### XSS
* Include script using user text input in the dom
* Include script using SVG image

### CSRF
* Create a new resource in another page, while cookie is present


### Sources:
* Vulnerabilities: http://html5sec.org
* Steal password using login manager: https://freedom-to-tinker.com/2017/12/27/no-boundaries-for-user-identities-web-trackers-exploit-browser-login-managers/
* Sniff password using login manager: https://senglehardt.com/demo/no_boundaries/loginmanager
* OWASP HTML5 Security Cheat Sheet: https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet
* Reverse Tabnapping: https://www.owasp.org/index.php/Reverse_Tabnabbing

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

