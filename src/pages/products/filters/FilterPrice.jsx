import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import React from 'react';

function FilterPrice({ setFilterPrice, filterPrice }) {
    const priceRange = {
        "0-500": "Less than 500",
        "500-1000": "500 to 1000",
        "1000-1500": "1000 to 1500",
        "1500-2000": "1500 to 2000",
            "2000+": "More than 2000"
    };

    const handlePriceChange = (range) => {
        const [min, max] = range.split('-').map(Number);
        if (max) {
            setFilterPrice([min, max]);
        } else {
            setFilterPrice([min, Infinity]); // Handle the "5000+" case
        }
    };

    return (
        <div>
            <Accordion allowToggle>
                <AccordionItem>
                    <AccordionButton className='flex justify-between'>
                        <h2 className='font-extrabold'>Price</h2>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                        <div className='flex flex-col'>
                            {Object.keys(priceRange).map(range => (
                                <div className='my-2'>
                               
                                    <input
                                        type='radio'
                                        name='price'
                                        value={range}
                                        checked={filterPrice.join('-') === range}
                                        onChange={(e) => handlePriceChange(e.target.value)}
                                        className='mr-6 p-2 text-2xl'
                                    /> 
                                    <label key={range} className='mr-2 text-md'>   {priceRange[range]}    </label>
                                   </div>
                          
                            ))}
                        </div>
                        <hr/>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default FilterPrice;
