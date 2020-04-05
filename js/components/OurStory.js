import React, { useState } from 'react'

import PageHeader from './pageHeader'

export default class OurStory extends React.Component {
    render() {
        return (
            <div className="page">
                <PageHeader headerName={'Our Story'} />
                <p>Our story began like many millennials, on a dating app. Meg posted a photo of her feeding a pony in Ireland and Cole commented something like,</p>
                <p>“Where did you find that pony?” </p>
                <p>“Pawnee, Indiana.” (trying to weed out boys with Park and Recreation references).</p>
                <p>“Is it Lil’ Sebastian?” (went along perfectly)</p>


                <p>After this quasi-flirty app interaction, Cole texted Meg to see if she wanted to get drinks. She said yes and they went to Tennessee Brew Works. The date went well and they went on a second and a third date the subsequent week. A first kiss followed. We’ve been hanging out almost every day since then.</p>
                <br /><br />
                <h3 style={{ textAlign: 'center' }}>Proposal Story</h3>

                <p>Meg and Cole go on hikes every Sunday at Percy Warner Park. This particular Sunday, Super Bowl Sunday, had the best weather we’ve had in months so we definitely planned on going on a hike. Cole had originally planned on popping the question later in the week but the weather was looking iffy and that day was so beautiful. After church, Cole dropped Meg off at home to work on homework. Meanwhile, he called our family and close friends to let them know it was happening today!</p>
                <p>After Meg finished her homework, Cole picked her up and we went to Percy Warner Park. We started on the trail and he pulled off on the side the trail to “sit and take in the day.” Cole talked about how excited he is to start their future together and couldn’t wait another day to do that. He popped the question and now WE’RE ENGAGED! </p>

                <p>When we got home, our friends had organized a surprise engagement party for us (note: they pulled it off in the 2 hours between Cole telling our roommates and us getting back from the hike). We felt so celebrated and loved having another surprise.</p>
            </div>
        )
    }
}