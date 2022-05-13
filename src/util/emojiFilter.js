import emojiList from "../emojiList.json";

const emojiFilter = (content, maxResults) => {
    return emojiList.filter(emoji => {
        if(emoji.title.toLowerCase().includes(content.toLowerCase())) {
            return true;
        }
        if(emoji.keywords.includes(content)) {
            return true;
        }
        return false;
    }).slice(0, maxResults)
}

export default emojiFilter;