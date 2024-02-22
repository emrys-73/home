<script>
// @ts-nocheck

    import { animate } from "../../stores";
    import { fade, scale, slide } from "svelte/transition";
    import { onMount } from "svelte";
    import { Button } from "$lib/components/ui/button";

    let show;
    $: show = false;

    let bookFile;
    let netFile;
    
    onMount( async () => {
        show = true;

        bookFile = data?.link ?? ""
        netFile = data?.net ?? ""

    })

    function downloadPDF() {
        // Create a temporary anchor (<a>) element
        const element = document.createElement('a');

        // Set the href to the book file URL
        element.setAttribute('href', bookFile);

        // Set the download attribute to the desired file name (optional)
        element.setAttribute('download', 'Wahrscheinlichkleitstheorie-Montoya.pdf');

        // Append the anchor to the body
        document.body.appendChild(element);

        // Programmatically click the anchor to trigger the download
        element.click();

        // Remove the anchor from the body
        document.body.removeChild(element);
    }

    function downloadArticle() {
        // Create a temporary anchor (<a>) element
        const element = document.createElement('a');

        // Set the href to the book file URL
        element.setAttribute('href', netFile);

        // Set the download attribute to the desired file name (optional)
        element.setAttribute('download', 'Networks-Montoya.pdf');

        // Append the anchor to the body
        document.body.appendChild(element);

        // Programmatically click the anchor to trigger the download
        element.click();

        // Remove the anchor from the body
        document.body.removeChild(element);
    }




    export let data;
</script>

{#if show}
    <div transition:scale={{ delay: 0, duration: 700 }}  id="hero" class="w-full h-full flex min-h-screen flex-col justify-center items-center pt-20 sm:pt-32 md:pt-40 text-white">
        <div  class="sm:w-3/4 w-full h-full flex flex-col py-12 px-4">
            <div class="flex md:flex-row flex-col w-full justify-center items-center z-10">
                <div class="justify-center items-center lg:w-3/5 w-full px-4 sm:px-10 flex flex-col gap-4">
                    <h1 class=" text-6xl xl:text-7xl font-bold pt-12 md:pt-0">
                        🎉 Free Stuff
                    </h1>
                    <p class="text-center">
                        I've always been a strong believer that we should share all we know so others can run faster and further. Here's a couple things I'd love you to have and I'll do my best on filling this page up more and more along the years.
                    </p>
                    <div>
                        <Button href="https://ko-fi.com/adrian_thanks_u" class="{$animate} px-6 py-6 bg-[#07BCFF] text-bold text-white hover:text-black hover:bg-white items-center justify-between gap-2">
                            <img src="https://assets-global.website-files.com/5c14e387dab576fe667689cf/64f1a9ddd0246590df69e9ef_ko-fi_logo_02.png" alt="Ko-Fi" class="w-10 h-10">
                            <span>
                                Support me on Ko-Fi
                            </span>
                        </Button>
                    </div>
                </div>


                
                
            </div>
            
        </div>
        <div class="w-full flex items-center justify-center flex-col gap-20 z-50">
            <div class="w-full flex flex-col justify-center items-center">
                <div class="md:w-1/2 w-full px-8 ">
                    <h2 class="w-full h-full text-4xl font-bold">
                        Probability Theory Book (German)
                    </h2>
                    <span class=" opacity-70">
                        Back in 2021, every fellow student I knew struggled or at least didn't like probability theory. I found it deeply exciting, so I wrote this book with the intention of helping everyone not only understand the topic easier but also maybe find joy in it as I did.
                    </span>
        
                    
                </div>
                <div class="w-1/2 justify-start items-start px-8 py-10 flex flex-col z-50">
                    <Button on:click={downloadPDF} class="{$animate} hover:bg-white altashadow font-bold py-2 w-4/5 hover:w-full rounded-full bg-[#7EFF6D] border-2 border-opacity-10 border-white text-black ">
                        Download book
                    </Button>
                </div>
            </div>

            <div class="w-full flex flex-col justify-center items-center">
                <div class="md:w-1/2 w-full px-8 ">
                    <h2 class="w-full h-full text-4xl font-bold"> 
                        Introductory article on Networks (German)
                    </h2>
                    <span class=" opacity-70">
                        Simply put, I hyperfocused on graph theory and networks so this short article samples a couple of the most interesting things I researched.
                    </span>
        
                    
                </div>
                <div class="w-1/2 justify-start items-start px-8 py-10 flex flex-col z-50">
                    <Button on:click={downloadArticle} class="{$animate} hover:bg-white altashadow font-bold py-2 w-4/5 hover:w-full rounded-full bg-[#7EFF6D] border-2 border-opacity-10 border-white text-black ">
                        Download Article
                    </Button>
                </div>
            </div>



        </div>

    </div>
{/if}