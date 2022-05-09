export default {
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
        {
            name: 'username',
            type: 'string',
            title: 'User Name',
        },
        {
            name: 'avatar',
            type: 'image',
            title: 'Avatar',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'username',
                maxLength: 96,
            },
        },
        {
            name: 'bio',
            type: 'text',
            title: 'Bio',
        },
    ],
    preview: {
        select: {
            title: 'username',
            media: 'avatar',
        }
    }
}