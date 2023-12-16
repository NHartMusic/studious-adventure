import * as React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

interface CustomizedAccordionProps {
  accordionData: Array<{ title: string; content: React.ReactNode; ranking: number }>;
}

const CustomAccordion = withStyles((theme: Theme) => ({
  root: {
    border: '2px solid #00B4DF',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
}))(MuiAccordion);

const CustomAccordionSummary = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: 'white',
    borderBottom: 'blue',
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
}))(MuiAccordionSummary);

const CustomAccordionDetails = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const CustomizedAccordion: React.FC<CustomizedAccordionProps> = ({ accordionData }) => {
  // Sort the accordionData based on the 'ranking' property
  const sortedAccordionData = accordionData.sort((a, b) => a.ranking - b.ranking);

  const [expanded, setExpanded] = React.useState<string | false | number>(false);

  const handleChange = (panel: number) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {sortedAccordionData.map((data, index) => (
        <CustomAccordion
          key={index}
          square
          expanded={expanded === index}
          onChange={handleChange(index)}
        >
          <CustomAccordionSummary>
            {data.ranking}. {data.title}
          </CustomAccordionSummary>
          <CustomAccordionDetails>{data.content}</CustomAccordionDetails>
        </CustomAccordion>
      ))}
    </>
  );
};

export default CustomizedAccordion;
