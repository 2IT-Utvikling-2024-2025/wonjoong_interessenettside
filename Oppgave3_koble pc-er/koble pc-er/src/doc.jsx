import './doc.css'
import one from './pic/pic-1.png'
import two from './pic/pic-2.png'
import tree from './pic/pic-3.jpg'
import fore from './pic/pic-4.png'

export default function DOC(){




    return(
        <>
            <div className='logo'>
                <h1>Tverrfaglig - koble sammen PC-er</h1>

            </div>
            <div innhold>
                <div className="plan">

                    <h2>Plan</h2>

                    <p>Pc-en: 2ITA 23, brukeren: Wonjoong Lee</p>

                    <p>1.	Først laster jeg ned Windows på en USB på min personlige datamaskin.</p>
                    <p>2.	Når Windows er lastet ned til USB-en, kobler jeg den til datamaskinen på skolen og reinstallere Windows.</p>
                    <p>3.	Når installasjonen av Windows er ferdig, starter jeg PC-en på nytt og bruker en Ethernetkabel til å koble datamaskinen min til porten på skrivebordet mitt, og kobler portene til meg og min makker på switchen.</p>
                    <p>4.	Jeg skal bruke ipconfig i cmd for å dele IP-en min og bruker den til å bekrefte responsen.</p> 
                    <p>5.   jeg skal bruke filezilla for å kolbe til Marcus sin pc</p>
                </div>

                <div className="window">
                    <h2>Installasjon av Windows</h2>
                    <p>Den første oppgaven var å installere Windows på skole-PC-en jeg fikk utdelt. Jeg startet med å koble en USB-enhet til min nåværende PC for å laste ned Windows 11.</p>
                    <p>Deretter koblet jeg USB-enheten til skole-PC-en og brukte BIOS for å starte installasjonen av Windows fra USB-en.</p>
                    <p>Etter at installasjonsprogrammet var i gang, fulgte jeg trinnene for å installere Windows på PC-en. </p>
                    <p>Når Windows var installert, gjennomførte jeg de grunnleggende innstillingene, som språk, tid og nettverk.</p> 


                </div>

                <div className="koble">
                    <h2>Koble sammen datamaskiner</h2>
                    <p>For å koble sammen min og Marcus sin PC, startet vi med å koble våre datamaskiner til Ethernet-portene (RJ45) på skrivebordet.</p>
                    <p>Deretter koblet vi riktig port på bryteren i klasserommet til portene som tilhører vårt skrivebord og Marcus sitt skrivebord. </p>
                    <p>Første gang vi brukte ping-kommandoen, fungerte det ikke. Kevin informerte oss om at dette skyldtes brannmuren. </p>
                    <p>Vi deaktiverte derfor Windows-brannmuren, og deretter fikk vi tilkoblingen til å fungere.</p> 
                    <img src={one} alt="test_pic" />


                </div>

                <div className="ftp">
                    <h2>Filoverføring med FTP</h2>
                    <p>Etter å ha etablert forbindelsen, begynte vi på oppgaven med å overføre filer ved hjelp av FTP. </p>
                    <p>Vi brukte FileZilla, som vi hadde lært om i første klasse. Først lastet vi ned både FileZilla og FileZilla-serveren. </p>
                    <p>Deretter tildelte vi statisk IP-adresser innenfor det IP-område vi hadde fått utdelt. Vi var i gruppe 3 (Gruppe 3 benytter IP-adresser: 192.168.1.40 - 59), </p>
                    <p>så jeg brukte 192.168.1.58 og Marcus brukte 192.168.1.57. Etter dette jobbet vi med brannmuren og portinnstillingene, som var avgjørende for at tilkoblingen skulle fungere. </p> 
                    <img src={two} alt="test_pic" />
                    <img src={tree} alt="test_pic" />
                </div>

                <div className="brann">
                    <h2>Brannmurinnstillinger</h2>
                    <p>For å kunne koble oss til måtte vi åpne en felles port. Vi gikk inn i Windows-brannmurinnstillingene i kontrollpanelet og opprettet en ny innkommende regel. </p>
                    <p>Der valgte vi port 21, som brukes for FTP, og tillot deretter tilkoblingen. Dette gjorde at filoverføringen kunne gjennomføres uten problemer.</p> 
                    <img src={fore} alt="test_pic" />
                </div>

                <div className="questions">
                    <h2>spørsmål</h2> <br /> <br />
                    <h3>Hva har du lært gjennom denne oppgaven? </h3>
                    <p>I dette prosjektet lærte jeg mye, ikke bare om tekniske ferdigheter, men også om samarbeid og problemløsningsferdigheter. 
                    Jeg føler at det hadde en stor innvirkning på min forståelse og kompetanse. Først, når det gjelder de tekniske ferdighetene, fikk jeg en dypere forståelse av hvordan datamaskiner kommuniserer over nettverk. 
                    Selv om jeg ikke klarte å lære alt i løpet av prosjektperioden, lærte jeg mye nytt ved å stadig stille spørsmål til folk rundt meg og ved å søke på nettet når jeg var usikker. 
                    Ting som jeg tidligere syntes var vanskelig å forstå, som brannmurer, ble plutselig mer forståelige gjennom praktiske øvelser.
                    Jeg lærte også mye om samarbeid i løpet av prosjektet. Ofte løste mine makker problemer som jeg ikke visste hvordan jeg skulle håndtere, og andre ganger var det jeg som hjalp dem med utfordringene de møtte. 
                    Fordi prosjektets mål var å få ikke bare min egen PC, men også mine makker PC-er til å fungere sammen, ble det en enda bedre mulighet til å øve på lagarbeid. Jeg føler at dette ga meg verdifull erfaring i å jobbe i team, noe som vil være viktig i fremtidige prosjekter.</p>
                    <br /> <br />
                    
                    <h3>Hvordan har din innsats og fokus vært?  </h3>
                    <p>I dette prosjektet var jeg ganske fornøyd med min egen innsats og konsentrasjon. Når vi møtte problemer og spurte lærerne om hjelp, ga de oss ikke direkte svar, men heller noen små hint. Dette tvang oss til å prøve forskjellige tilnærminger og utvikle våre kritiske tenkeferdigheter. Gjennom denne prosessen kunne vi forbedre våre analytiske evner og finne kreative løsninger på utfordringene vi sto overfor.
                    Jeg mener også at alle gruppemedlemmene viste imponerende konsentrasjon i dette prosjektet. Selv om vi ofte støtte på feil og utfordringer underveis, klarte vi likevel å løse problemene, selv om det noen ganger tok lang tid. Det var nettopp vår evne til å holde fokus og jobbe hardt som gjorde at vi til slutt klarte å finne løsningene. Jeg synes dette er et godt eksempel på effektiv innsats og dedikasjon. Takket være at alle fulgte opp sine respektive oppgaver, er jeg overbevist om at vi klarte å oppnå et vellykket resultat til slutt.
                    </p>
                    <br /> <br />

                    <h3>Om du skal utføre oppgaven en gang til, er det noe du ville gjort annerledes?</h3>
                    <p>Hvis jeg skulle gjennomføre dette prosjektet igjen, ville jeg ønske å bruke tiden min litt mer effektivt. Da jeg installerte Windows i begynnelsen, brukte jeg mye tid på det, og derfor føler jeg at jeg gikk glipp av muligheten til å utforske flere aspekter ved brannmuren. Siden jeg brukte så mye tid på grunnleggende oppgaver i starten, fikk jeg ikke brukt nok tid på mer komplekse utfordringer som nettverkssikkerhet og FTP-konfigurasjon, som var en viktig del av oppgaven.
                    Derfor, hvis jeg skulle gjøre dette prosjektet på nytt, ville jeg fokusere på å redusere tiden som brukes på enklere oppgaver som installasjon av Windows og grunnleggende oppsett. I stedet ville jeg bruke mer tid på å jobbe med brannmuren og FTP-problematikk. Dette ville gi meg muligheten til å lære mer om nettverkssikkerhet på et dypere nivå
                    </p>

                </div>
            </div>

        </>
    )
}
