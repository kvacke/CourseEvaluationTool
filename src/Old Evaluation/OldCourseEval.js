import React, { useState } from "react";
import MultipleChoiceQuestion from "./Components/MultipleChoiceQuestion";
import RadioButtonQuestion from "./Components/RadioButtonQuestion";
import TextAreaQuestion from "./Components/TextAreaQuestion";
import PageTab from "./Components/PageTab";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    fontFamily: "Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif",
    margin: "0 auto",
    marginTop: 40,
    width: "60%",
    minWidth: 640,
    color: "#333",
  },
  h2: {
    textAlign: "left",
    fontSize: "21.0975px",
    fontWeight: "400",
    marginLeft: 6,
    marginBottom: -2,
  },
  description: {
    textAlign: "left",
    marginLeft: 6,
    fontSize: 15,
    maxWidth: 700,
    marginBottom: 13,
  },
  resultContainer: {
    textAlign: "left",
    fontWeight: "100",
    fontSize: 14.55,
    marginLeft: 4,
  },
  resultTitle: {
    fontWeight: "400",
    fontSize: 21,
    marginBottom: 8,
  },
  responseRate: {
    marginTop: 10,
  },
  sendButton: {
    fontSize: 13,
    paddingTop: 5,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 5,
    marginLeft: 6,
    marginBottom: 10,
    float: "left",
    borderColor: "#c0c0c0",
    border: "1px solid",
    borderBottomColor: "#9b9b9b",
    fontFamily: "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
  },
  shown: {},
  hidden: {
    display: "none",
  },
});

const OldCourseEval = (props) => {
  const classes = useStyles();
  const [pageNumber, setPageNumber] = useState(0);

  let content = [];
  content.push(
    <div className={pageNumber === 0 ? classes.shown : classes.hidden}>
      <div className={classes.description}>
        Du kan fylla i och ändra dina svar i kursvärderingen t.o.m. 2021-05-11
        23:59. Det är de senast sparade svaren som ligger till grund för
        kursvärderingen.
        <br />
        <br />
        Dina synpunkter är värdefulla, och såväl positiva synpunkter som
        konstruktiv och saklig kritik välkomnas. Eftersom kritiken ska vara
        saklig och konstruktiv, undanbedes kränkande formuleringar om enskilda
        personer.
      </div>
      <RadioButtonQuestion
        number={1}
        question={"Hur nöjd är du med kursen i stort?"}
        alternatives={[
          "Mycket missnöjd",
          "Ganska missnöjd",
          "Varken nöjd eller missnöjd",
          "Ganska nöjd",
          "Mycket nöjd",
        ]}
        arrows={true}
        comment={true}
      />
      <MultipleChoiceQuestion
        number={2}
        question={
          "Sammanfatta ditt huvudintryck av kursen genom att markera de ord som bäst beskriver kursen för dig"
        }
        words={[
          "stimulerande",
          "problemlösning",
          "analyserande",
          "ämnesfördjupning",
          "intellektuellt utmanande",
          "tråkig",
          "effektiv",
          "onödig",
          "aha-upplevelse",
          "utantill-kunskap",
          "engagerande",
          "för svår",
          "för lätt",
          "intressant",
          "spretig",
          "tung",
          "praktisk tillämpning",
          "ineffektiv",
          "nyttig",
        ]}
        comment={true}
      />
      <TextAreaQuestion
        number={3}
        question={"Det här var särskilt bra med kursen:"}
      />
      <TextAreaQuestion
        number={4}
        question={"Det här kan förbättras med kursen:"}
      />
      <RadioButtonQuestion
        number={5}
        question={
          "Administrationen under kursen (schema, tentamensanmälen etc) har fungerat väl."
        }
        alternatives={[
          "Instämmer inte alls",
          "Instämmer i låg grad",
          "Instämmer i viss grad",
          "Instämmer i hög grad",
          "Instämmer helt",
        ]}
        arrows={true}
        comment={true}
      />
      <RadioButtonQuestion
        number={6}
        question={
          "Jag har överlag vetat vad som förväntas av mig i den här kursen i relation till kursmålen"
        }
        alternatives={[
          "Instämmer inte alls",
          "Instämmer i låg grad",
          "Instämmer i viss grad",
          "Instämmer i hög grad",
          "Instämmer helt",
        ]}
        arrows={true}
        comment={true}
      />
      <RadioButtonQuestion
        number={7}
        question={
          "I vilken grad har du haft svårigheter att följa med i kursen på grund av bristande förkunskaper?"
        }
        alternatives={[
          "Inte alls",
          "I låg grad",
          "I viss grad",
          "I hög grad",
          "I mycket hög grad",
        ]}
        arrows={true}
        comment={true}
      />
      <RadioButtonQuestion
        number={8}
        question={
          "Jag anser att kursens krav på arbetsinsats motsvarar antalet kurspoäng"
        }
        alternatives={[
          "Instämmer inte alls",
          "Instämmer i låg grad",
          "Instämmer i viss grad",
          "Instämmer i hög grad",
          "Instämmer helt",
        ]}
        arrows={true}
        comment={true}
      />
      <RadioButtonQuestion
        number={9}
        question={"Studierna på kursen har varit intellektuellt utmananade"}
        alternatives={[
          "Instämmer inte alls",
          "Instämmer i låg grad",
          "Instämmer i viss grad",
          "Instämmer i hög grad",
          "Instämmer helt",
        ]}
        arrows={true}
        comment={true}
      />
      <RadioButtonQuestion
        number={10}
        question={
          "Läraren/-na har varit bra på att förklara kursinnehåll som varit svårt att förstå i kursen"
        }
        alternatives={[
          "Inte alls",
          "I låg grad",
          "I viss grad",
          "I hög grad",
          "I mycket hög grad",
        ]}
        arrows={true}
        comment={true}
      />
      <RadioButtonQuestion
        number={11}
        question={"Hur nöjd är du med din egen arbetsinsats på kursen?"}
        alternatives={[
          "Mycket missnöjd",
          "Ganska missnöjd",
          "Varken nöjd eller missnöjd",
          "Ganska nöjd",
          "Mycket nöjd",
        ]}
        arrows={true}
        comment={true}
      />
      <RadioButtonQuestion
        number={12}
        question={
          "I vilken grad har studierna inom kursen bidragit till att utveckla din förmåga gällande att läsa och förstå vetenskapliga texter?"
        }
        alternatives={[
          "Inte alls",
          "I låg grad",
          "I viss grad",
          "I hög grad",
          "I mycket hög grad",
        ]}
        arrows={true}
        comment={true}
      />
      <RadioButtonQuestion
        number={13}
        question={
          "I vilken grad har studierna inom kursen bidragit till att utveckla din förmåga gällande att arbeta i grupp/samarbeta med andra?"
        }
        alternatives={[
          "Inte alls",
          "I låg grad",
          "I viss grad",
          "I hög grad",
          "I mycket hög grad",
        ]}
        arrows={true}
        comment={true}
      />
      <RadioButtonQuestion
        number={14}
        question={
          "I vilken grad har kursen byggt vidare på det du tidigare har lärt dig i ämnet?"
        }
        alternatives={[
          "Inte alls",
          "I låg grad",
          "I viss grad",
          "I hög grad",
          "I mycket hög grad",
        ]}
        arrows={true}
        comment={true}
      />
      <button
        className={classes.sendButton}
        onClick={() =>
          alert(
            "Här skickas användaren vidare till nästa kursvärderinger eller attrakdiff"
          )
        }
      >
        Spara svar
      </button>
    </div>
  );

  content.push(
    <div
      className={pageNumber === 1 ? classes.resultContainer : classes.hidden}
    >
      <h3 className={classes.resultTitle}>Resultat</h3>
      <div>
        <i>Den här kursvärderingen har besvarats av 22% (12/54) studenterna.</i>
        <br />
        <p className={classes.responseRate}>
          Resultaten blir tillgängliga först efter att kursvärderingen avslutats
          och svaren gåtts igenom, summerats och publicerats.
        </p>
      </div>
    </div>
  );

  content.push(
    <div
      className={pageNumber === 2 ? classes.resultContainer : classes.hidden}
    >
      <h3 className={classes.resultTitle}>Kursrapport</h3>
      <p>Kursrapporten är inte färdigställd</p>
    </div>
  );

  return (
    <div className={classes.container}>
      <h2 className={classes.h2}>KURSVÄRDERING</h2>
      <PageTab pageNumber={pageNumber} setPageNumber={setPageNumber} />
      {content[0]}
      {content[1]}
      {content[2]}
    </div>
  );
};

export default OldCourseEval;
