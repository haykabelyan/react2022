import { useState } from 'react';

const BlogFilter = ({postQuery, latest, setSearchParams}) => {
    const [search, setSearch] = useState(postQuery);
    const [checked, setChecked] = useState(latest);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const params = {};

        if (search) params.post = search;
        if (checked) params.latest = true;

        setSearchParams(params);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" name="search" value={search} onChange={e => setSearch(e.target.value)} />
            <input type="checkbox" name="latest" checked={checked} onChange={e => setChecked(e.target.checked)}/> New only
            <input type="submit" value="Search" />
        </form>
    );
};

export { BlogFilter };