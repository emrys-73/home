<script>
// @ts-nocheck

    import { animate } from "../stores";
    import { Button } from "$lib/components/ui/button";
    // import * as Carousel from "$lib/components/ui/carousel";
    import Autoplay from "embla-carousel-autoplay";
    import * as Card from "$lib/components/ui/card";
    import { useChat } from 'ai/svelte'
    // import Carousel from 'svelte-carousel'
    import { fade, slide, scale } from 'svelte/transition';
	import { onMount } from "svelte";


    let show;
    $: show = false;

    onMount(() => {
        show = true;
    })
     
    // I build custom software focused on AI, brand-identity and outstanding performance.

    const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });

    const { messages, handleSubmit, input } = useChat({
		initialMessages: [{"role": "system", "content": "You are Adrian's personal AI assistant and you live inside his personal webpage. Your name is MONDAI which stands for Mainly One New Dynamic Artificial intelligence but you will only tell your name if the user explicitely asks you about it. Your goal is to clear any questions anyone might have about Adrian and you will only talk about him. If you don't know something you will encourage them to contact Adrian personally. Here is your knowledge base on Adrian: Identity: Adrian, male, Lima, Peru. Childhood Goals: Exploration, overcoming resource limits. Skills: Multilingual (German, English, Spanish, French, Romanian), musical talent (10 instruments), graphic design, photography. Academics: National Mathematics Olympiads (2nd place, age 11), Humboldt School scholarship. Early Ventures: Online sales (translations, graphic designs), wedding photography. Business Experience: Dropshipping store (age 16), various entrepreneurial projects, freelancing in graphic design, photography, cinematogrpahy and software development since he was 13 years old. Volunteering: House-building for needy, raised $10,000. Passions: Psychology, science, engineering, mathematics, AI, theology. Research: Algorithmic thinking in education. Higher Education: Computer Science, Technical University of Munich. Teaching: Tutor, lecturer in discrete structures. Authorship: Book on probability theory. Professional Roles: PLC Engineer (TUM Hyperloop), Software Consultant (Horyzn aerospace), Software Developer (.NET, Isar Aerospace), diverse tasks including market analysis, B2B negotiations, and interface design. Programming Skills: Python, Java, C#, C++, C, Haskell, OCaml. Design Work: Logos for Isar Aerospace. Religious Affiliation: Christian. Church Contribution: Software for song management, website development, social media marketing. AI Ventures: AI-enhanced tools development, custom-trained AI chatbots, partnership with Mino Lee, founder of Astralta - premium software company focused on solving unique challenges through AI-Powered software with emphasis on excellence in performance, user-friendliness and brand identity. Startup Involvement: TUM.AI Startup Accelerator, co-founder of Aivery. Adrian is part of the EWOR Pre-Idea fellowship. Adrian is an EWOR Fellow. EWOR is a place where the most extraordinary people find the education, network, and capital to solve the world’s biggest problems. Personal Life: Single, enjoys music, singing, gym, sports, christian, active at church, passionate learner and inventor."}],
        onFinish: () => {
            storeMessage($messages[$messages.length - 2].content, $messages[$messages.length - 1].content)
        }
      });

      async function storeMessage (UserMessage, AIMessage) {
          const response = await fetch('/api/storeMsg', {
                method: 'POST',
                body: JSON.stringify({ UserMessage, AIMessage }),
                headers: {
                    'content-type': 'application/json'
                }
            });
    
            const result = await response.json()
        }

    const tags = [
        {
            title: "Founder",
            url: '/#about'
        },
        {
            title: "Computer Scientist",
            url: '/#about'
        },
        {
            title: "EWOR Fellow",
            url: 'https://ewor.io/'
        },
        // {
        //     title: "Author",
        //     url: '/free'
        // },
    ]

</script>

{#if show}
    <div transition:scale={{ delay: 0, duration: 700 }}  id="hero" class="w-full h-full flex min-h-screen flex-col justify-center items-center pt-20 sm:pt-32 md:pt-40 text-white">
        <!-- Hero -->
        <div  class="lg:w-3/4 w-full h-full flex flex-col py-12 px-4">

            <div class="flex md:flex-row flex-col w-full justify-center items-center z-10">
                <div class="justify-center items-center lg:w-3/5 w-full px-4 sm:px-10">
                    <h1 class=" text-4xl xl:text-5xl font-bold pt-12 md:pt-0">
                        <b class="bg-[#7EFF6D] text-black">I build software</b> for outstanding performance, beautifully.
                    </h1>
                    <div class="w-full h-12 flex flex-row gap-2 items-center justify-start py-10 sm:py-4 flex-wrap gap-y-4 mb-10 sm:mb-20">
                        {#each tags as t}
                            <a href={t.url} class="{$animate} bg-white bg-opacity-10 rounded-full px-5 py-1 opacity-70 hover:opacity-100 hover:cursor-pointer">
                                <span class="shrink-0 whitespace-nowrap">
                                    {t.title}
                                </span>
                            </a>
                        {/each}
                    </div>
                </div>
                <div class=" md:w-2/5 justify-end">
                    <img src="/herome.png" alt="hero" class=" scale-75 md:scale-105 ">
                </div>
            </div>

            <div class="rounded-2xl bg-white bg-opacity-5 py-8 backdrop-blur-xl -mt-16 md:-mt-2 lg:-mt-4 px-10 mx-6 font-light tracking-wide z-20">
                Hey!
                <br><br>
                I'm glad you're here. It very likely means we could build great projects together - so I'll be waiting for you to <b class="{$animate} text-[#7EFF6D] hover:opacity-100 opacity-90 hover:font-bold"><a href="mailto:montoya@astralta.com">hit me up</a></b> to get us started.

                <br>
                <br>

                God bless ya!
                <br>
                - Adrian
            </div>

            <div class="w-full py-12 sm:py-8 px-10 justify-center items-center flex flex-col-reverse sm:flex-row gap-4 z-30">
                <Button href="/#ai" class="{$animate} hover:bg-white altashadow py-6 w-4/5 hover:w-full rounded-full bg-transparent border-2 border-opacity-10 border-white text-white hover:text-black">
                    Talk to my assistant
                </Button>

                <Button href="mailto:montoya@astralta.com" class="{$animate} hover:bg-white altashadow font-bold py-6 w-4/5 hover:w-full rounded-full bg-[#7EFF6D] border-2 border-opacity-10 border-white text-black ">
                    Talk to me
                </Button>
            </div>

        </div>


        <div id="about" class="w-full h-full py-40 min-h-[80vh] flex justify-center items-center flex-col px-4">
            <div class="w-full md:w-3/4 h-full flex lg:flex-row flex-col gap-4 px-4">
                <div class="w-full h-full flex flex-col">
                    <div class="flex flex-row items-center">
                        <div class="w-[230px] h-[150px] z-10 relative">
                            <img src="/mac.png" alt="mac" class="z-40">
                        </div>
                        <h2 class="text-5xl font-bold w-full h-[120px] flex items-end">
                            About me
                        </h2>
                    </div>
                    <div class="bg-white bg-opacity-5 rounded-2xl w-full h-full p-10 px-10 text-[#989898] font-semibold text-xl z-40 backdrop-blur-xl">
                        I’m a <b class="font-semibold text-white">computer scientist & founder</b> with a passion for great design and mathematics. 

                        <br>
                        <br>

                        I’m based in <b class="font-semibold text-white">Munich, Germany</b> and with our company <a href="https://www.astralta.com/" class="{$animate} opacity-80 hover:opacity-100 text-[#7EFF6D] font-semibold">Astralta</a> we’ve <b class="font-semibold text-white">deployed 20+ premium software projects</b> with a strong emphasis on excellence in performance, user-friendliness, and brand identity.
                    </div>
                </div>

                <!-- I can do all things through Him who strengthens me -->

                <div class="w-full h-full flex flex-col gap-4 font-semibold tracking-wider xl:min-h-[482px] justify-center items-center">
                    <div class="bg-white bg-opacity-5 rounded-2xl w-full h-full p-6 px-10">
                        <h3 class="font-bold text-3xl pb-6">
                            Astralta
                        </h3>

                        <span class="text-[#989898] font-semibold tracking-wider text-xl">
                            <!-- We offer a <b class="font-semibold text-white">rent-a-brain service</b> with the goal of <b class="font-semibold text-white">solving unique challenges</b> through <b class="font-semibold text-white">AI-Powered Software</b>. -->
                            We offer a premium <b class="font-semibold text-white"> rent-a-brain service</b> with the goal of solving unique challenges through <b class="font-semibold text-white">AI-Powered Software</b>.

                            <br><br>

                            Check out <b class="font-semibold text-white">what we are building <a href="https://www.astralta.com/" class="{$animate} text-[#7EFF6D] font-semibold opacity-80 hover:opacity-100">here</a></b>.
                        </span>
                    </div>

                    <div class="bg-white bg-opacity-5 rounded-2xl w-full h-full p-6 text-[#989898] px-10 text-xl">
                        Every now and then I take on a project <b class="text-white font-semibold">100% for free</b> if the cause speaks to me. If you feel you have something like that, <a href="mailto:montoya@astralta.com" class="{$animate} opacity-80 hover:opacity-100 text-[#7EFF6D] font-semibold">hit me up</a>!
                    </div>
                </div>
                
            </div>
        </div>

    <div class="w-full h-full flex jsutify-center items-center text-center pb-40 flex-col">
        <h2 class="text-5xl font-bold w-full py-12 lg:py-40 flex text-center justify-center items-center">
            Experience
        </h2>

        <div class="h-full flex flex-col gap-8">
            <div class="flex lg:flex-row flex-col w-full h-full justify-center items-center">
                <a href="https://www.tum.de/en/">
                    <img class="{$animate} scale-75 hover:scale-90" src="/logos/me_tum.png" alt="TUM">
                </a>
                <a href="https://www.isaraerospace.com/">
                    <img class="{$animate} scale-75 hover:scale-90" src="/logos/me_isar.png" alt="Isar Aerospace">
                </a>
                <a href="https://tumhyperloop.com/">
                    <img class="{$animate} hover:scale-90 scale-75" src="/logos/me_hyper.png" alt="TUM Hyperloop">
                </a>
            </div>
            <div class="flex lg:flex-row flex-col w-full h-full justify-center items-center">
                <a href="https://www.dglr.de/nc/startseite/">
                    <img class="{$animate} hover:scale-90 scale-75" src="/logos/me_dglr.png" alt="DGLR">
                </a>
                <!-- <a href="https://www.lufthansa-cargo.com/de/">
                    <img class="{$animate} hover:scale-90 scale-75 py-8 mr-20" src="/logos/me_luft.png" alt="Lufthans">
                </a> -->
                <a href="https://www.tum-ai.com/e-lab">
                    <img class="{$animate} hover:scale-90 scale-75 py-6" src="/logos/me_tumai.png" alt="TUM.AI E-LAB">
                </a>
            </div>
            
            <div class="flex lg:flex-row flex-col w-full h-full justify-center items-center -mt-4">
                <a href="https://ewor.io/">
                    <img class="{$animate} w-40 hover:w-52" src="/logos/me_ewor.png" alt="EWOR">
                </a>
            </div>


        </div>
    </div>
        
            <!-- <div class="logos w-full flex flex-col items-center justify-center">
                <div class="h-full flex flex-row logos-slide">
                    <img src="/logos/me_hory.png" alt="Horyzn Aerospace">
                    <img src="/logos/me_isar.png" alt="Isar Aerospace">
                    <img src="/logos/me_dglr.png" alt="DGLR">
                    <img src="/logos/me_tum.png" alt="TUM">
                    <img src="/logos/me_luft.png" alt="Lufthans">
                    <img src="/logos/me_tumai.png" alt="TUM.AI E-LAB">
                    <img src="/logos/me_google.png" alt="GDSC">
                    <img src="/logos/me_hyper.png" alt="TUM Hyperloop">

                    <img src="/logos/me_hory.png" alt="Horyzn Aerospace">
                    <img src="/logos/me_isar.png" alt="Isar Aerospace">
                    <img src="/logos/me_dglr.png" alt="DGLR">
                    <img src="/logos/me_tum.png" alt="TUM">
                    <img src="/logos/me_luft.png" alt="Lufthans">
                    <img src="/logos/me_tumai.png" alt="TUM.AI E-LAB">
                    <img src="/logos/me_google.png" alt="GDSC">
                    <img src="/logos/me_hyper.png" alt="TUM Hyperloop">
                </div>
            </div>
            -->

            

        <div id="ai" class="w-full h-full py-40 min-h-[60vh] px-4 flex justify-center items-center">
            <div class="sm:px-4 flex flex-col gap-4 w-full sm:w-3/4 px-2">
                <div>
                    <h2 class="text-5xl font-bold w-full flex py-4 px-4">
                        Ask <br> anything
                    </h2>
                </div>

                <div class="px-4 py-4 opacity-55 text-md w-full h-full">
                    <p class="text-lg md:text-2xl font-bold">
                        I'd love to personally talk to you. But until then, feel free to talk to my assistant.
                    </p>
                </div>
                
                <div class="bg-white bg-opacity-5 rounded-2xl w-full h-full p-4 sm:p-10 md:px-10 text-[#989898] font-semibold text-xl z-40 backdrop-blur-xl">
                    <div class="pb-10 overflow-auto w-full relative">
                        <ul class="overflow-auto max-h-80 my-4 flex flex-col gap-2">
                        {#each $messages as message}
                        {#if message.role == "assistant"}
                        <li class="font-normal text-white">{message.content}</li>
                        {:else}
                            {#if message.role == "user"}
                                <li class="font-normal">{message.content}</li>
                            {/if}
                        {/if}
                            
                        {/each}
                        </ul>
                        <form on:submit={handleSubmit} class="w-full absolute bg-green-500 bottom-0 flex flex-row rounded-md overflow-hidden">
                        <input bind:value={$input} class="w-full bg-[#e5e5e5] text-black px-2 font-bold text-sm " />
                        <button type="submit" class="{$animate} px-4 py-2 bg-[#000000] hover:bg-[#7EFF6D] hover:text-black text-white font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>                          
                        </button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>

        <div id="contact" class="w-full h-full py-40 min-h-screen bg-[url('/bottom.png')] bg-cover relative flex justify-center flex-col">
            
                <div class="relative w-full h-full flex flex-col">
                    <div>
                        <h3 class="text-[60pt] sm:text-[80pt] md:text-[100pt] font-bold -ml-6">
                            together
                        </h3>
                    </div>
                    <div class="justify-end w-full h-full items-center text-end md:-mt-16 overflow-hidden">
                        <h3 class="text-[60pt] sm:text-[80pt] md:text-[100pt] font-bold -mr-6">
                            Let's work
                        </h3>
                    </div>

                </div>

                
                <div class="w-full h-full min-h-60 flex flex-col justify-center items-center px-6 gap-4">
                    <div class="w-2/3 px-4 h-full justify-center items-center flex min-h-20 flex-row gap-4 z-50">
                        <a href="tel:(+49)1731928390" class="{$animate} fill-white hover:fill-black bg-white hover:bg-white bg-opacity-10 rounded-full hover:bg-opacity-100 w-12 h-12 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8">
                                <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z"/>
                            </svg>
                        </a>

                        <a href="https://www.instagram.com/adrianmontoya00/" class="{$animate} fill-white hover:fill-black bg-white hover:bg-white bg-opacity-10 rounded-full hover:bg-opacity-100 w-12 h-12 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" class=" w-8 h-8">
                                <path d="M34,3H16C8.83,3,3,8.83,3,16v18c0,7.17,5.83,13,13,13h18c7.17,0,13-5.83,13-13V16C47,8.83,41.17,3,34,3z M25,36c-6.07,0-11-4.93-11-11s4.93-11,11-11s11,4.93,11,11S31.07,36,25,36z M37,15c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S38.1,15,37,15z"/>
                                <path d="M34,25c0,4.96-4.04,9-9,9s-9-4.04-9-9s4.04-9,9-9S34,20.04,34,25z"/>
                            </svg>
                        </a>

                        <a href="https://calendly.com/adrian_cal/astralta" class="{$animate} fill-white hover:fill-black hover:stroke-black hover:text-black bg-white hover:bg-white bg-opacity-10 rounded-full hover:bg-opacity-100 w-12 h-12 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                              </svg>                              
                        </a>

                        <a href="https://www.linkedin.com/in/adrianm1701/" class="{$animate} fill-white hover:fill-black bg-white hover:bg-white bg-opacity-10 rounded-full hover:bg-opacity-100 w-12 h-12 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" class="w-8 h-8">
                                <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"/>
                            </svg>
                        </a>
                        

                        <a href="https://wa.me/1731928390" class="{$animate} fill-white hover:fill-black bg-white hover:bg-white bg-opacity-10 rounded-full hover:bg-opacity-100 w-12 h-12 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" class="w-8 h-8">
                                <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"/>
                            </svg>
                        </a>
                        


                    </div>
                    <Button href="mailto:montoya@astralta.com" class="{$animate} hover:bg-white z-20 backdrop-blur-lg altashadow-xs py-6 w-4/5 hover:w-full rounded-full bg-transparent border-2 border-opacity-10 border-white text-white hover:text-black">
                        Get in touch
                    </Button>
                    <Button href="mailto:montoya@astralta.com" class="{$animate} altashadow-xl hover:z-50 z-20 sm:z-10 altashadow-xs font-bold py-6 w-4/5 hover:w-full rounded-full bg-[#7EFF6D] hover:bg-[#7EFF6D] backdrop-blur-lg border-2 border-opacity-10 border-white text-black ">
                        Get in touch (in green)
                    </Button>

                    
                    
                </div>

                <div class="absolute flex bottom-0 right-2 w-1/2 lg:h-1/2">
                    <img src="/callme.png" alt="callme" class="z-40">
                </div> 

                
                    <div class="absolute z-50 backdrop-blur-lg py-3 bottom-0 text-[8pt] md:text-sm bg-white bg-opacity-5 flex w-full text-center justify-center items-center altashadow-xs">
                        Copyright © 2024 Astralta Inc. All rights reserved.
                    </div>
                

        </div>
    </div>
{/if}