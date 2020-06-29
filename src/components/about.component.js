import React, { Component } from 'react';
import marion from '../img/marion-michele-1191859-unsplash.png'

export default class About extends Component {
   render() {
      return (
         <div class="about">
            <img class="marion" src={marion} alt="Marion" />
            <div class="main-1">
               <div class="">
                  <h2 class="header-post">About me</h2>
                  <p>Nulla lacinia, sapien nec mollis pharetra, neque diam sodales ipsum, suscipit commodo magna quam id felis. Morbi pulvinar venenatis elementum. Etiam est ex, accumsan eu pellentesque nec, maximus id sem. Nulla facilisi. Donec malesuada aliquet diam, in porta ex condimentum nec.</p>
                  <h3 class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                  <p>In laoreet consequat tellus ac bibendum. Nunc consectetur ante in orci viverra laoreet. Aliquam condimentum neque non cursus dapibus. Aliquam aliquet quam dui, nec facilisis velit ultricies at. Nullam eu sodales lectus. Sed interdum tempus libero sit amet pulvinar. Quisque fringilla augue ac massa interdum laoreet.</p>
                  <h3 class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                  <p>Aenean id neque porta, maximus tellus sit amet, aliquet mi. Curabitur lectus diam, pharetra vitae gravida in, faucibus nec tortor. Suspendisse porta, felis nec suscipit tincidunt, urna turpis bibendum nisi, eu malesuada ex magna id dolor. Praesent nunc turpis, elementum vitae dapibus ut, suscipit in lectus. In sit amet gravida dui. Quisque quis est urna. Ut eu malesuada eros. Aliquam pharetra pellentesque magna. Maecenas consequat quam sit amet diam faucibus accumsan. Aenean lectus elit, vestibulum id dui vitae, facilisis dictum augue. Curabitur viverra eu lorem eget facilisis. Sed ut risus sed tortor lacinia lacinia non in ex. Suspendisse tortor ante, interdum eget iaculis sit amet, blandit sit amet orci. Aenean tortor est, malesuada in tellus id, semper mollis risus.</p>
               </div>
            </div>
         </div>
      )
   }
}
