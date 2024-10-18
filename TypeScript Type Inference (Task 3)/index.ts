async function getUserInfo(userId: number): Promise<{ name: string; age?: number }> {
    
    const response = await fetch(`/api/users/${userId}`);
    
    if (!response.ok) {
        throw new Error(`Error fetching user info: ${response.statusText}`);
    }
    
    const data = await response.json();

    return {
        name: data.name,
        age: data.age
    };
}
