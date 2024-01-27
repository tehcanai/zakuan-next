
"use client"

import { Divider, Fade, useMediaQuery } from '@mui/material';
import { blue } from '@mui/material/colors';
import Link from 'next/link';
import { useState } from 'react';



const backText = '<- Back'

const blueText: string = 
"A night, blue lit. A blue unlike the sea where stars and suns are woven into. A blue tapestry of history of remembrance of graves. As we gaze upwards to see, what do we see but a reflection of a reflection of the countless souls that have similarly gazed upon the very same sight. And do you not hear the whispers, consoling those lost in the midst of life, silenty humming hym. Which of us are so mute to it that we would look on those that hear it as mad and insane, as much as though the truth it is. Know that those nights stretch upon the world, like a blanket to keep us warm from the light. A light that brings us to the stage to act, become someone else, and to go wherever. From that light, a blanket blue thrown over us to keep us to be us. Which we are given to believe that it is us and the world. Alone. Whom the blanket we hold tight, each across the stretch of the world, never wanting to let go. And in that moment, the kinship of mourning faces are closer than ever was before. A blue beyond the world, to see, to hear, to feel, and so that we soothe. Grieve are we when that blue becomes hue."

const woeText: string =
"Woe is the fate of that fishermen staring out from the harbour. Scruffy beard stubbed over the face, a face crinkled of old age, tan in color. Fading black eyes wandering flit watching the boats and floats as they pass along the waters surrounding the cape. He stood over the sea, towering over unflinchingly, a sight to behold for modern popes. The wind blowing his untucked shirt like a flag. Once, he was someone who bravely sailed the seas and found there a home amongst the vast expanse of blue. A friend to call and return back whenever he felt alone. Loyal is the sea that she would always be there to console him. Now, death has sent their greetings, politely extending their hand to the poor old bastard fishermen. "

const book: Map<number, string> = new Map([
  [1, blueText],
  [2, woeText]
])

export default function Page() {
  const media = useMediaQuery('(min-width: 1024px)');
  const [text, setText] = useState(blueText);

  const handlePage = (page: number) => {
    setText(book.get(page) as string)
  }
  
  return (
    <Fade in={true} timeout={1000}>
      <main className={'flex flex-col self-stretch items-left pt-24 pb-12 md:pt-[100px] mx-10 lg:mx-40 xl:mx-80 space-y-4'}>
        <Link className='hover:text-white' href="/" prefetch={true}>{backText}</Link>
        <Divider className='bg-white opacity-50'></Divider>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex flex-row lg:flex-col space-x-4 lg:space-x-0'>
            <button className='hover:text-white underline text-left' onClick={() => handlePage(1)}>Blue</button>
            <button className='hover:text-white underline text-left' onClick={() => handlePage(2)}>Woe</button>
          </div>
          {media ?
            <Divider className='bg-white mx-8 opacity-50' orientation='vertical' flexItem={true}></Divider> :
            <Divider className='bg-white my-4 opacity-50' orientation='horizontal' flexItem={true}></Divider>
          }
          <h1 className='text-justify'>
            {text}
          </h1>
        </div>
      </main>
    </Fade>
  );
}