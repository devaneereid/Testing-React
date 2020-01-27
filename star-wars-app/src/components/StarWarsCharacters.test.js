import React from 'react';
import {render, fireEvent, getByLabelText, wait} from '@testing-library/react';
import {getData as mockGetData} from '../api/getData';
import StarWarsCharacters from './StarWarsCharacters';


jest.mock('../api');

// test('button should render', async() => {
//     const {getByText} = render(<StarWarsCharacters />)
//     getByText(/next/i)
//     getByText(/previous/i)
// })

// test('Renders characters', () => {
//     mockGetData.mockResolvedValue();
//     render(<StarWarsCharacters />);
// });


test('buttons render and fire onClick', () => {
    const {getByText} = render(<StarWarsCharacters />);
    const nextButton = getByText(/next/i);
    const previousButton = getByText(/previous/i);

    fireEvent.click(nextButton);
    fireEvent.click(previousButton);
});

// it('renders "success" text', () => {
//     const {getAllByText, findByText} = render(<StarWarsCharacters />);

//     fireEvent.click(getByText("previous"));
//     findByText();
// });

// test('renders characters', async() => {
//     mockGetData.mockResolvedValueOnce();

//     const {getByLabelText, getByText} = render(<StarWarsCharacters />);
//     const characterInput = getByLabelText(/characters/i);
//     const newCharacter = {
//         characters: 'Test characters'
//     };

//     fireEvent.change(characterInput, { target: {
//         value: newCharacter.characters }});

//     const nextButton = getByText(/next/i);

//     fireEvent.click(nextButton);

//     expect(mockGetData).toHaveBeenCalledWith(newCharacter);

//     wait(() => expect(getByText(/goToNext/i)));

// });

// test('test test', () => {});

// test('Submit button working', () => {
//     const {getByText, getByLabelText} = render(<StarWarsCharacters />);

//     const characterInput = getByLabelText(/characters/i);

//     const newCharacter = {
//         characters: 'Test characters'
//     };
//     const submitButton = getByText(/submit/i);

//     fireEvent.click(submitButton);
  
// });

// describe('StarWarsCharacters />', () => {
//     it('contains axios call', () => {
//         const wrapper = mount(<StarWarsCharacters getCharacters={getCharacters}/>)
//     })
// })

// fireEvent(getByText(container, 'Submit')),
// new MouseEvent('click', {
//     bubbles: true,
//     cancelable: TextTrackCueList,
// })



