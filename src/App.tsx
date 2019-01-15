import {
  DateInput,
  MaterialForm,
  MultipleChoice,
  NumberInput,
  SectionHeader,
  SingleChoice,
  TextInput
} from 'dvn-react-material-ui';
import { RatingStars } from 'dvn-react-material-ui/dist/inputs/RatingStars';
import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render() {

    const fields: any[] = [
      new SectionHeader(
        'sectionTextInput',
        'Text Inputs',
        'These inputs can be used to display single/multi line text inputs.',
      ),
      new TextInput(
        'simpleText',
        'Simple Text',
        'Simple text placeholder',
        'Simple text input that can be used for email, first name, last name etc.',
      ).require(),
      new TextInput(
        'longText',
        'Long Text',
        'Long text placeholder',
        'This input can be used for addresses, comments etc. This one starts from 3 lines and goes up to 5 lines.',
        'text',
        3,
        5
      ).require(),
      new SectionHeader(
        'sectionNumberInput',
        'Number Inputs',
        'This input can be used for numbers.',
      ),
      new NumberInput(
        'simpleNumber',
        'Number',
        'Type some number',
        'This input can be used for amounts, decimals etc. Each step here will increase/decrease 0.5, max is 10, min is -3.',
        0.5,
        -3,
        10
      ).require(),
      new SectionHeader(
        'sectionSingleChoice',
        'Selecting single item',
        'The inputs below are used for providing single selection input.',
      ),
      new SingleChoice(
        'radio',
        'Radio field',
        [
          new SingleChoice.Option('Option 1', 1),
          new SingleChoice.Option('Option 2', 2),
        ],
        'Displays the options with radio inputs.',
      ).require(),
      new SingleChoice(
        'select',
        'Select field',
        [
          new SingleChoice.Option('Option 1', 1),
          new SingleChoice.Option('Option 2', 2),
        ],
        'Select input that shows the options as list.',
        'select',
        'Placeholder shown if no value is selected',
      ).require(),
      new SectionHeader(
        'sectionMultipleChoice',
        'Selecting multiple item',
        'The inputs below are used for providing multiple selection input.',
      ),
      new MultipleChoice(
        'checkboxes',
        'Checkboxes',
        [
          new MultipleChoice.Option('Option 1', 1),
          new MultipleChoice.Option('Option 2', 2),
        ],
        'Displays checkboxes for multiple value selection.',
      ).require(),
      new MultipleChoice(
        'multipleSelect',
        'Multiple Select',
        [
          new MultipleChoice.Option('Option 1', 1),
          new MultipleChoice.Option('Option 2', 2),
        ],
        'Displays a select input like the single option, the only difference is the way it shows the selected values.',
        'select',
        'Custom placeholder',
      ).require(),
      new MultipleChoice(
        'tagCloud',
        'Tag Cloud',
        [
          new MultipleChoice.Option('Option 1', 1),
          new MultipleChoice.Option('Option 2', 2),
        ],
        'Displays fancy tags, works as same as the checkboxes.',
        'tag-cloud',
      ).require(),
      new SectionHeader(
        'sectionDate',
        'Date Inputs',
        'Date and time related inputs.',
      ),
      new DateInput('date', 'Date', 'Select date', 'Lets user select a day with month and year.')
      .setDateFormat('DD/MM/YYYY')
      .require(),
      new DateInput('time', 'Time', 'Select time', 'Lets user select date and time.')
      .setTimeFormat('HH:mm')
      .setInputType('time')
      .setTimePlaceholder('Select time')
      .require(),
      new DateInput('dateTime', 'Date Time', 'Select date', 'Lets user select date and time.')
      .setInputType('dateTime')
      .setTimePlaceholder('Select time')
      .require(),
      new SectionHeader(
        'sectionOthers',
        'Other Inputs',
        'Other available inputs.',
      ),
      new RatingStars(
        'ratingStars',
        'Rating stars',
        'Displays number of stars to get floating value between 0-1.',
        10,
      ).require()
    ];

    return (
      <div className="app">
        <MaterialForm
          fields={fields}
          onSubmit={data => {
            // tslint:disable
            console.log(data);
          }}
          submitButtonLabel={"Send"}
          extraButtons={[{
            label: 'Secondary',
            onClick: () => {
              // tslint:disable
              console.log(1);
            },
            loading: false,
          }]}
        />
      </div>
    );
  }
}

export default App;
