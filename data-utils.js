export function addFriend(friends, name) {
    const newFriend = {
        name: name || `Friend #${Math.floor(Math.random() * 1000)}`,
        satisfaction: 1
    };
    
    friends.push(newFriend);
}


//should be an array?

export default function findFriendByName(name, friend) {

    for (friend of friendData) {
        if (friend.name === name) {
            return friend;
        }
    }
}