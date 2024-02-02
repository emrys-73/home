<script>
// @ts-nocheck

    import { animate, landmakerUrl } from '../../../stores.js';
    import { Button } from '$lib/components/ui/button';
    import { onMount } from 'svelte'
    import { fade, slide, scale } from 'svelte/transition';

    let loaded;
    $: loaded = false;

    let url;
    $: url = ""

    onMount(() => {
        url = `${$landmakerUrl}/${data?.user?.username}`
        loaded = true;
    })

    let showCopyMessage = false; // New variable to track message visibility

    async function copyToClipboard() {
        try {
            await navigator.clipboard.writeText(url);
            showCopyMessage = true; // Show the message

            setTimeout(() => {
                showCopyMessage = false; // Hide the message after 5 seconds
            }, 5000);
        } catch (err) {
            console.error('Failed to copy to clipboard:', err);
        }
    }

    let paymentUrl = "https://buy.stripe.com/3cs2bF6MNeaR3ug8wE"


    export let data;

</script>

{#if loaded}

<div transition:scale={{ delay: 0, duration: 700 }} class="w-full h-full flex flex-col justify-center items-center z-40 relative">
    <div class="w-3/4 h-full pt-60 flex justify-center items-center flex-col gap-6">
        <h1 class="w-full h-full text-6xl flex items-center justify-center font-bold">
            Hey {data?.user?.username}!
        </h1>
        <p>
            Great to have you here.
        </p>

        <div class="p-6 bg-white bg-opacity-5 px-8 my-10 rounded-2xl">
            <p class="text-center text-[#989898]">
                If you are here it means <b class="text-white font-normal">I handpicked you</b> for our latest secret project because I believe <b class="text-white font-normal">your work should be supported</b> and seen by waaay more people. 
                <br><br>
                Therefore I built this <b class="text-white font-normal">personal website for you</b> that you can keep <b class="text-white font-normal">for just $1 a month</b>.
            </p>
            
        </div>

        <p>
            Your site's URL
        </p>

        <div class="px-4 py-2 rounded-xl bg-transparent border-2 border-white border-opacity-20 flex flex-row gap-2 justify-start items-center">
            <span>
                {url}
            </span>
            <button class="{$animate} flex justify-center items-center flex-col opacity-60 hover:opacity-100" on:click={copyToClipboard}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                </svg>
            </button>
            {#if showCopyMessage}
                <div transition:scale={{ delay: 0, duration: 300 }} class="copy-message px-6 py-1 bg-[#7EFF6D] text-black font-bold text-md rounded-2xl">
                    🎉 URL copied!
                </div>
            {/if}

        </div>



        <Button href={url} class="{$animate} w-3/4 hover:w-full sm:w-1/2 sm:hover:w-3/4 p-2 px-4 bg-[#7EFF6D] font-bold text-black hover:bg-white rounded-full mt-4">
            Go to my site
        </Button>

        {#if !data?.user?.paying}
        <Button href={paymentUrl} class="{$animate} w-3/4 hover:w-full sm:w-1/2 sm:hover:w-3/4 breathe p-2 px-4 bg-transparent hover:text-black border-2 border-white border-opacity-20 text-white hover:bg-white rounded-full">
            Buy my site for 1$
        </Button>
        
        {/if}
        <Button href="mailto:montoya@astralta.com" class="{$animate} w-3/4 hover:w-full sm:w-1/2 sm:hover:w-3/4 p-2 px-4 bg-transparent hover:text-black border-2 border-white border-opacity-20 text-white hover:bg-white rounded-full">
            Contact
        </Button>
    </div>

    <div class="lg:w-3/4 w-full flex py-40 flex-col justify-center items-center relative ">
        <h2 class="text-4xl font-bold py-20 text-center px-4">
            Here is a look at your website
        </h2>
        <div class="w-full h-full flex justify-center items-center">
            <iframe title="your Site" src={url} frameborder="0" class="lg;w-3/4 px-4 w-full h-full rounded-3xl min-h-[90vh]"></iframe>
        </div>

        <Button href={url} class="{$animate} w-1/2 hover:w-3/4 p-2 px-4 bg-[#7EFF6D] font-bold text-black hover:bg-white rounded-full my-8">
            Go to my site
        </Button>


        <div class="w-full h-full flex justify-center items-center flex-col py-40 px-4">
            <h2 class="text-4xl font-bold py-6 text-center">
                Why One Dollar Website?
            </h2>

            <div class="p-6 bg-white bg-opacity-5 px-8 my-10 rounded-2xl">
                <p class="text-center text-[#989898]">
                    Today <b class="text-white font-normal">free personal website builders suck</b> and spam you with their branding. Furthermore, <b class="text-white font-normal">paid solutions are way too expensive</b> for what they offer. 

                    <br><br>
                    Nonethless having a personal website <b class="text-white font-normal">it's a game changer</b>. It increases credibility and steps-up your online presence game. It's <b class="text-white font-normal">truly a no-brainer</b> if you want to do anything online.

                    <br>
                    <br>

                    Therefore, we made it possible to have a <b class="text-white font-normal">powerfull</b>, <b class="text-white font-normal">clean</b> and <b class="text-white font-normal">beautiful personal website</b> for as little as <b class="text-white font-normal">$1 a month</b>. 

                    <br>
                    <br>

                    <span class="py-2 text-center text-white flex w-full h-full justify-center items-center">
                        <ul class="flex flex-col gap-2 tracking-wider">
                            <li>
                                ✅ Custom AI Assistant 
                            </li>
                            <li>
                                ✅ No hidden costs
                            </li>
                            <li>
                                ✅ No hosting costs
                            </li>
                            <li>
                                ✅ Flexible customisation
                            </li>
                            <li>
                                ✅ Premium customer support
                            </li>
                        </ul>
                    </span>

                    <br>

                    <span class="text-center w-full flex items-center justify-center text-[#989898]">
                        <p>
                            For 98% of the cases, this is more than enough to already <b class="text-white font-normal">land more clients and step up your game</b>. And if you want to <b class="text-white font-normal">upgrade</b> to something even more professional, me and my software company - Astralta - are at your service to guide you and bring you <b class="text-white font-normal">outstanding results with premium experience</b>.
                        </p>
                    </span>
                    </p>

                    

                     
            </div>

        </div>

        <div class="w-full h-full flex justify-center items-center flex-col py-40 px-4">
            <h2 class="text-4xl font-bold py-6">
                Want more?
            </h2>

            <div class="p-6 bg-white bg-opacity-5 px-8 my-10 rounded-2xl">
                <p class="text-center text-[#989898]">
                    
                    This is just the beginning. <b class="text-white font-normal">There's so much more</b> we can do, such as
                    </p>

                        <ul class="py-6 text-[#989898] space-y-4 ">
                            <li>
                                - <b class="text-white font-normal">More messages</b> with your <b class="text-white font-normal">personal AI assistant</b> inside your website 
                            </li>
                            <li>
                                - Add <b class="text-white font-normal">more sites</b> and <b class="text-white font-normal">sections</b>
                            </li>
                            <li>
                                - Get a the <b class="text-white font-normal">Full Pro Version</b> of your Personal Website with <b class="text-white font-normal">custom branding</b> and <b class="text-white font-normal">optimisation</b>
                            </li>
                        </ul>

                        <p class="text-[#989898]">
                    
                            For any of these or more, simply <a href="mailto:montoya@astralta.com" class="{$animate} text-[#7EFF6D] opacity-80 hover:opacity-100">reach out to me</a> and we'll get our hands onto it.
                </p>
                
            </div>
            <Button href={url} class="{$animate} w-1/2 hover:w-3/4 p-2 px-4 bg-transparent hover:text-black border-2 border-white border-opacity-20 text-white hover:bg-white rounded-full">
                Contact
            </Button>

        </div>


        



        {#if !data?.user?.paying}
        <div class="text-center flex opacity-40">

            <p>
                if you don't wish to buy the site, it will be automatically deleted latest one week after its creation.
            </p>
        </div>
        {/if}

        <p class="opacity-40">
            *Your site allows you to send up to 100 messages to your AI Chatbot. Upgrade is possible.
        </p>


        <a href="mailto:montoya@astralta.com" class="absolute bottom-4">
            <p class="{$animate} opacity-60 hover:opacity-100">
                Request change or get in touch
            </p>
        </a>
    </div>
</div>

{/if}