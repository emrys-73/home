<script>
    import "../app.pcss";
    import { ModeWatcher } from "mode-watcher";
    import { Button } from "$lib/components/ui/button";
    import { Sun, Moon } from "radix-icons-svelte";
    import { toggleMode } from "mode-watcher";
    import { animate } from "../stores";
    

    const enableDarkMode = false;
    
    const menuItems = [
        {
            title: "About",
            url: "/#about",
            active: true,
        },
        {
            title: "AI Assistant",
            url: "/#ai",
            active: true,
        },
        {
            title: "Contact",
            url: "/#contact",
            active: true,
        },
    ]

</script>

<ModeWatcher />

<div class="w-full h-full absolute top-0 z-0">
    <img src="/top.png" alt="top" class="w-full absolute ">
</div>
<div class=" w-full h-20 flex px-4 justify-center items-center top-2 z-50 fixed">
    <div class="text-white bg-white bg-opacity-10 altashadow-xs w-2/3 rounded-full backdrop-blur-lg h-12 px-4 py-2 justify-between items-center flex flex-row overflow-hidden">
        <div class="w-full h-full absolute top-0 z-10 bg-gradient-to-r from-black to-transparent left-0 opacity-90 hidden"/>
        
        <div class="h-6 w-8 sm:h-8 flex z-20 sm:w-12">
            <a href="/#hero">
                <img src="/logo.png" alt="logo">
            </a>
        </div>

        <div class="w-full justify-center  items-center h-full text-center flex sm:hidden">
            <span class="font-bold">
                Adrian Montoya

            </span>
            
        </div>
        <div class="w-full justify-center lg:justify-start items-center h-10 px-2 mx-8 flex-row gap-6 md:gap-10 lg:gap-12 z-30 sm:flex hidden">
            {#each menuItems as m}
                {#if m.active}
                <a href={m.url} class="{$animate} opacity-70 hover:opacity-100">
                    <span>
                        {m.title}
                    </span>
                </a>
                {/if}
            {/each}
        </div>

        <div class="z-30">
            <div class="w-full hidden lg:flex justify-end min-w-[160px] items-center h-full text-center pr-4 font-bold">
                <span>
                    Adrian Montoya
                </span>
                
            </div>
            {#if enableDarkMode}
            <Button on:click={toggleMode} class="rounded-full" size="icon">
                <Moon
                class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                />
                <Sun
                  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                />
                <span class="sr-only">Toggle theme</span>
              </Button>
            {/if}
        </div>
    </div>
</div>
<slot/>