<script>
    // @ts-nocheck
    
        import { animate } from "../../../stores";
        import { onMount } from 'svelte';
        import { fade, slide, scale } from 'svelte/transition';
        import { Button } from "$lib/components/ui/button";
    
        let display = false;
    
    
        onMount(async () => {
            display = true;
        });
    
    
        let email;
        $: email = "";
        
    
    </script>
    
    
    {#if display}
    <div transition:scale={{ delay: 0, duration: 700 }} class="w-full h-full items-center min-h-screen justify-center flex flex-col z-40 relative pt-20 lg:pt-40">
            <div class="w-3/4 h-full flex justify-center items-center">
                <h1 class="text-6xl font-bold py-16 pt-24 xl:py-10">
                    <!-- <b class=" font-extrabold bg-[7EFF6D] #box-shadow: 0px -23px 101px 0px rgba(0, 0, 0, 0.50) inset;] text-black">One Website</b> - One Dollar -->
                    Apply to One Dollar Website!
                </h1>
            </div>
    
            <div class="xl:w-3/4 w-full flex-col lg:flex-row flex justify-center items-center p-10">
                <div>
                    <img src="/good.png" alt="Are we a match?" class="scale-75">
                </div>
                <form action="?/login" method="POST" class="bg-white bg-opacity-5 rounded-2xl w-full p-8">
                    <h3 class="text-2xl font-semibold">
                        Are you putting great content out there? - Let's talk!
                    </h3>
    
                    <p class="text-[#959595] py-4">
                        Starting 2024, I'm <b class="text-white font-semibold">handpicking a couple creators</b> from all over the world that I believe have <b class="text-white font-semibold">outstanding content</b> to be shared. 
                        If this is you, then I go and build you a <b class="text-white font-semibold">personalised website for just $1 a month</b>. Yes, just one single dollar.
    
                        <br>
                        <br>
    
                        This is my way to <b class="text-white font-semibold">support your craft</b> from the beginning. Of course, this is just the beginning. It's up to us to bring way more power to your site, your audience and your career.
                    </p>
                    <br>
                    <br>
    
                    <p class="text-[#959595]">
                       All you need to do is <a href="mailto:montoya@astralta.com" class="{$animate} text-[#7EFF6D] font-bold opacity-80 hover:opacity-100">send us an EMail</a> with all the <b class="text-white font-semibold">links</b> you want me and my team to check out. You can also <b class="text-white font-semibold">explain why</b> you feel this would be a great fit for us or recommend another creator you find suitable. 
                    </p>
    
                    <br>
                    <br>
    
                    
    
                    <div class="w-full h-full flex justify-center items-center gap-4 flex-col py-6">
                        <div class="w-full justify-center items-center flex">
                            <Button href="mailto:montoya@astralta.com" class="{$animate} rounded-full bg-[#7EFF6D] border-2 text-black font-bold border-white border-opacity-20 px-6 py-2 hover:bg-white hover:text-black hover:w-3/4 w-1/2">
                                Apply here
                            </Button>
                        </div>
    
                        <!-- <form action="?/request" method="POST" class="w-full justify-center items-center flex">
                            <input type="email" name="email_request" id="email_r" bind:value={email} placeholder="Email Request" hidden class="{$animate} my-4 bg-transparent rounded-full placeholder:text-white placeholder:opacity-70 inner-shadow w-full px-6 py-2">
                            
                            <button class="{$animate} rounded-full bg-transparent border-2 border-white border-opacity-20 px-6 py-2 hover:bg-white hover:text-black hover:w-3/4 w-1/2">
                                Request Access
                            </button>
                        </form> -->
    
                    </div>
    
                  
                    <!-- It's simple. 
                    
                    <ul>
                        <li>
                            1. I handpick creators like you that I find are doing an outstanding job that I resonate with   
                        </li>
                        <li>
                            2. You get a clean website to showcase your content, your story and your socials.
                        </li>
                        <li>
                            3. (If you absolutely love it) we can 
                        </li>
                    </ul> -->
                </form>
                
            </div>
    
        </div>
    
    {/if}
    
    
    