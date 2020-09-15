import React, { Component } from 'react'
import Footer from '../Footer.js'

export default class Coffee101 extends Component {
    render() {
        /* 
           instead of hard coding the HTML, it might have been cool to make a 'CoffeeInstructionItem' component and store the data as json that you map over and pump into those components:
            coffeeInstructions.map(recipe => <CoffeeInstructionItem recipe={recipe} />)
        */
        return (
            <div className="happy2">
                <h1 className='brew101Header'>Brew 101</h1>
                <h3 className='generalInfoHeader'>The Makeup of a Good Cup of Coffee</h3>
                <div className='generalInfo'>
                    <ul>
                        <li>
                        <p>Acidity</p> – refers to the sensation of dryness one feels in the back and under the edges of the mouth.  The amount acidity in coffee is determined by the degree the coffee is roasted.
                        </li>
                        <li>
                        <p>Body</p> – refers to the overall feel of the coffee in your mouth.  Descriptions of this particular criterion is often  related to the texture or heaviness of a particular brew and is done by allowing the coffee to rest on the tongue and by rubbing the tongue against the roof of the mouth.
                        </li>
                        <li>
                        <p>Flavor</p> – is the entire perception of the three characteristics seen above.  A coffee’s flavor is often grouped into three traits: rich (full-bodied), balance (the taste does not empower the other) and complex (multi-flavored).
                        </li>
                        <li>
                        <p>Aftertaste</p> – The sensation that is experienced after coffee is swallowed is called the aftertaste.  It is the lingering remnant of the coffee taste which changes over a period of time. 
                        </li>
                    </ul>
                </div>
                <h2 className='brewMethodsHeader'>Favorite Brew Methods</h2>
                <h3 className='chemexHeader'>Chemex Brew Method</h3>
                <img src='/chemex.jpg' alt='chemex'/>
                <div className='chemex'>
                    <ul className='chemexItemsNeeded'>
                        <h3>Items Needed</h3>
                        <li>Kettle</li>
                        <li>Digital Scale</li>
                        <li>Grinder</li>
                        <li>Chemex</li>
                        <li>Chemex Filters</li>
                        <li>Coffee Beans</li>
                        <li>Filtered Water</li>
                    </ul>
                    <ul className='chemexRecipe'>
                        <h3>Chemex Recipe</h3>
                            <li>Fill Kettle and heat to 200 degrees Farenheit</li>
                            <li>Weigh out 21 grams of coffee beans per mug on digital scale (21 grams per 350 grams of water)</li>
                            <li>Grind coffee until medium coarse consistency</li>
                            <li>Rinse Chemex with warm water (effectively warming cylinder)</li>
                            <li>Drain water from Chemex and then place filter into Chemex</li>
                            <li>Pour warm water into filter to wet filter and flush out residue</li>
                            <li>Then drain water once filter is flushed</li>
                            <li>Put coffee grounds into filter</li>
                            <li>Turn on Scale</li>
                            <li>Place Chemex on scale and zero out</li>
                            <li>Pour 100 grams of hot water in the center of the grounds, saturating all grounds</li>
                            <li>After 45 seconds, pour another 150 grams of hot water onto coffee grounds</li>
                            <li>After another 30 seconds, pour another 100 grams of hot water onto coffee grounds, for a total of 350 grams of hot water poured</li>
                            <li>Once all water if filtered through you can pour coffee directly into your cup</li>
                    </ul>
                </div>
                <h3 className='frenchPressHeader'>French Press Brew Method</h3>
                <img className='frenchPressImage' src='/french-press.jpg' alt='french press'/>
                <div className='frenchPress'>
                    <ul className='frenchPressItemsNeeded'>
                        <h3>Items Needed</h3>
                            <li>Kettle</li>
                            <li>Digital Scale</li>
                            <li>Grinder</li>
                            <li>French Press</li>
                            <li>Coffee Beans</li>
                            <li>Small Spoon</li>
                    </ul>
                    <ul className='frenchPressRecipe'>
                        <h3>French Press Recipe</h3>
                            <li>Fill Kettle and heat water until it reaches a temperature of 212 degrees Farenheit</li>
                            <li>Grind 21 grams of coffee beans per mug (21 grams per 350 grams of water)</li>
                            <li>Turn on Scale</li>
                            <li>Place Chemex on scale and zero out</li>
                            <li>Pour in 350 grams of water, ensuring that all the grounds are completely soaked</li>
                            <li>Let the coffee steep for 4 minutes</li>
                            <li>After the 4 minutes have passed gently stir the crust that has formed on the top of the french press.</li>
                            <li>Then with a spoon remove the foam and any floating sediment</li>
                            <li>Let the coffee steep for at least 5 more minutes (the longer you leave it, the better)</li>
                            <li>Place the lid back on the french press and plunge until the plunger just touches the top of coffee</li>
                            <li>Pour gently into your preheated cup</li>
                    </ul>
                </div>
               <Footer className="coffee101footer" />
            </div>
        )
    }
}
