<script setup></script>

<template>
    <div class="formSection--grid">
        <article p-12 flex flex-col justify-around h-16rem>
            <h3 text-5xl font-700>Tell me about your project</h3>
            <p text-xl w-xl>
                If you're interested in working together, feel free to reach out. I'm always looking
                for new opportunities to collaborate and create something amazing.
            </p>
        </article>

        <!-- Mail Form -->
        <section flex items-center>
            <form w-full px-12 py-15>
                <div flex flex-row justify-between w-1xl>
                    <div w-full pr-10 mb-5>
                        <label for="name"></label>
                        <input
                            w-full
                            h-2rem
                            border-0
                            border-b-1
                            border-gray-5
                            bg-transparent
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div w-full pr-10>
                        <label for="email"></label>
                        <input
                            w-full
                            h-2rem
                            border-0
                            border-b-1
                            border-gray-5
                            bg-transparent
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                    </div>
                </div>
                <div pr-10 mb-5>
                    <label for="subject"></label>
                    <input
                        w-full
                        h-2rem
                        border-0
                        border-b-1
                        border-gray-5
                        bg-transparent
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        required
                    />
                </div>
                <div pr-10 mb-6>
                    <label for="message"></label>
                    <textarea
                        w-full
                        h-xs
                        border-0
                        border-b-1
                        border-gray-5
                        bg-transparent
                        id="message"
                        name="message"
                        placeholder="Message"
                        required
                    ></textarea>
                </div>
                <div w-full>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
    </div>
</template>

<style scoped>
.formSection--grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

form {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row: auto;
    grid-auto-flow: dense;
    gap: 1rem;
}

input,
textarea::placeholder {
    font:
        1.5rem 'Poppins',
        sans-serif;
}

input,
textarea {
    font:
        1.5rem 'Poppins',
        sans-serif;
    color: rgb(208, 208, 208);
}

input,
textarea:focus {
    outline: none;
}

button {
    color: rgb(83, 83, 83);
    background: transparent;
    border: none;
    cursor: pointer;
    font:
        2.5rem 'Poppins',
        sans-serif;
    font-weight: 700;
}

button:hover {
    color: rgb(255, 255, 255);
    transition: all 0.3s ease-in-out 0.1s;
}
</style>
