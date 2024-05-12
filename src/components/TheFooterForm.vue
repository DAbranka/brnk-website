<script setup></script>

<template>
    <div>
        <article>
            <h3 text-4xl font-500>Tell me about your project</h3>
            <p text-xl>
                If you're interested in working together, feel free to reach out. I'm always looking
                for new opportunities to collaborate and create something amazing.
            </p>
        </article>
        <section>
            <!-- Mail Form -->
            <form>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    </div>
</template>

<style scoped></style>
