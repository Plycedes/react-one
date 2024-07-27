export const getGithubData = async () => {
    const response = await fetch("https://api.github.com/users/plycedes");
    return response.json();
};
