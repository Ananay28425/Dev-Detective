document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const profileContainer = document.getElementById('profile-container');

    // 1. Persistence: Check LocalStorage on load
    const lastUser = localStorage.getItem('github_last_search');
    if (lastUser) {
        fetchUser(lastUser);
        searchInput.value = lastUser;
    }

    // 2. Event Handling
    searchBtn.addEventListener('click', () => {
        const username = searchInput.value.trim();
        if (username) fetchUser(username);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const username = searchInput.value.trim();
            if (username) fetchUser(username);
        }
    });

    // 3. The Core Logic (Async/Await + Fetch)
    async function fetchUser(username) {
        // Clear previous state & show loading (Optional improvement)
        profileContainer.innerHTML = '<div class="empty-state">Searching...</div>';

        try {
            const response = await fetch(`https://api.github.com/users/${username}`);

            // 4. Robustness: Handle 404s
            if (!response.ok) {
                throw new Error("User not found");
            }

            const data = await response.json();

            // 5. Render Dynamic DOM
            renderProfile(data);

            // Save to LocalStorage
            localStorage.setItem('github_last_search', username);

        } catch (error) {
            profileContainer.innerHTML = `
                <div class="error">
                    <p><strong>No user found.</strong></p>
                    <p>Check the spelling and try again.</p>
                </div>
            `;
        }
    }

    function renderProfile(data) {
        // Using Template Literals to inject HTML
        profileContainer.innerHTML = `
            <div class="card">
                <img src="${data.avatar_url}" alt="${data.login}" class="avatar">
                <div class="name">${data.name || data.login}</div>
                <a href="${data.html_url}" target="_blank" class="login">@${data.login}</a>
                <p class="bio">${data.bio || "This user has no bio."}</p>

                <div class="stats">
                    <div class="stat-item">
                        <span class="stat-value">${data.public_repos}</span>
                        <span class="stat-label">Repos</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${data.followers}</span>
                        <span class="stat-label">Followers</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${data.following}</span>
                        <span class="stat-label">Following</span>
                    </div>
                </div>
            </div>
        `;
    }
});
