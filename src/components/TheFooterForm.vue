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
            <form >
                <div>
                    <label for="name"></label>
                    <input border-none bg-transparent type="text" id="name" name="name" placeholder="Name" required />
                </div>
                <div>
                    <label for="email"></label>
                    <input border-none bg-transparent type="email" id="email" name="email" placeholder="Email" required />
                </div>
                <div>
                    <label for="subject"></label>
                    <input border-none bg-transparent id="subject" name="subject" placeholder="Subject" required  />
                </div>
                <div>
                    <label for="message"></label>
                    <textarea border-none bg-transparent id="message" name="message" placeholder="Message" required></textarea>
                </div>
                <button type="submit">Submit</button>
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
</style>
