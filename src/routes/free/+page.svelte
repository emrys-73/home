<script>
// @ts-nocheck

    import { animate } from "../../stores";
    import { fade, scale, slide } from "svelte/transition";
    import { onMount } from "svelte";
    import { Button } from "$lib/components/ui/button";

    let show;
    $: show = false;

    let bookFile;
    
    onMount( async () => {
        show = true;

        bookFile = data?.link ?? ""

        console.log(bookFile)

    })

    function downloadPDF() {
        // Create a temporary anchor (<a>) element
        const element = document.createElement('a');

        // Set the href to the book file URL
        element.setAttribute('href', bookFile);

        // Set the download attribute to the desired file name (optional)
        element.setAttribute('download', 'ProbabilityTheoryBook.pdf');

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
    <div transition:scale={{ delay: 0, duration: 700 }}  id="hero" class="w-full h-full flex min-h-screen flex-col justify-center items-center pt-20 sm:pt-32 md:pt-40">
        <div  class="lg:w-3/4 w-full h-full flex flex-col py-12 px-4">
            <div class="flex md:flex-row flex-col w-full justify-center items-center z-10">
                <div class="justify-center items-center lg:w-3/5 w-full px-4 sm:px-10">
                    <h1 class=" text-6xl xl:text-7xl font-bold pt-12 md:pt-0">
                        🎉 Free Stuff
                    </h1>
                </div>

                
                
            </div>
            
        </div>
        <div class="md:w-1/2 w-full px-8 ">
            <h2 class="w-full h-full text-4xl font-bold">
                Probability Theory Book
            </h2>
            <span class=" opacity-70">
                Back in 2021, every fellow student I knew struggled or at least didn't like probability theory. I found it deeply exciting, so I wrote this book with the intention of helping everyone not only understand the topic easier but also maybe find joy in it as I did.
            </span>

            
        </div>
        <div class="w-1/2 justify-start items-start px-8 py-10 flex flex-col z-50">
            <Button on:click={downloadPDF} class="{$animate} altashadow font-bold py-2 w-4/5 hover:w-full rounded-full bg-[#7EFF6D] border-2 border-opacity-10 border-white text-black ">
                Download book
            </Button>
        </div>

    </div>
{/if}