import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\MessageController::index
 * @see app/Http/Controllers/MessageController.php:27
 * @route '/admin/messages'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/messages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MessageController::index
 * @see app/Http/Controllers/MessageController.php:27
 * @route '/admin/messages'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MessageController::index
 * @see app/Http/Controllers/MessageController.php:27
 * @route '/admin/messages'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MessageController::index
 * @see app/Http/Controllers/MessageController.php:27
 * @route '/admin/messages'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MessageController::index
 * @see app/Http/Controllers/MessageController.php:27
 * @route '/admin/messages'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MessageController::index
 * @see app/Http/Controllers/MessageController.php:27
 * @route '/admin/messages'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MessageController::index
 * @see app/Http/Controllers/MessageController.php:27
 * @route '/admin/messages'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\MessageController::deleteMethod
 * @see app/Http/Controllers/MessageController.php:36
 * @route '/admin/messages/{message}/delete'
 */
export const deleteMethod = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

deleteMethod.definition = {
    methods: ["get","head"],
    url: '/admin/messages/{message}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MessageController::deleteMethod
 * @see app/Http/Controllers/MessageController.php:36
 * @route '/admin/messages/{message}/delete'
 */
deleteMethod.url = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { message: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { message: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    message: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        message: typeof args.message === 'object'
                ? args.message.id
                : args.message,
                }

    return deleteMethod.definition.url
            .replace('{message}', parsedArgs.message.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MessageController::deleteMethod
 * @see app/Http/Controllers/MessageController.php:36
 * @route '/admin/messages/{message}/delete'
 */
deleteMethod.get = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MessageController::deleteMethod
 * @see app/Http/Controllers/MessageController.php:36
 * @route '/admin/messages/{message}/delete'
 */
deleteMethod.head = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleteMethod.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MessageController::deleteMethod
 * @see app/Http/Controllers/MessageController.php:36
 * @route '/admin/messages/{message}/delete'
 */
    const deleteMethodForm = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: deleteMethod.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MessageController::deleteMethod
 * @see app/Http/Controllers/MessageController.php:36
 * @route '/admin/messages/{message}/delete'
 */
        deleteMethodForm.get = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deleteMethod.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MessageController::deleteMethod
 * @see app/Http/Controllers/MessageController.php:36
 * @route '/admin/messages/{message}/delete'
 */
        deleteMethodForm.head = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deleteMethod.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    deleteMethod.form = deleteMethodForm
/**
* @see \App\Http\Controllers\MessageController::read
 * @see app/Http/Controllers/MessageController.php:43
 * @route '/admin/messages/{message}/read'
 */
export const read = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: read.url(args, options),
    method: 'patch',
})

read.definition = {
    methods: ["patch"],
    url: '/admin/messages/{message}/read',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MessageController::read
 * @see app/Http/Controllers/MessageController.php:43
 * @route '/admin/messages/{message}/read'
 */
read.url = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { message: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { message: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    message: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        message: typeof args.message === 'object'
                ? args.message.id
                : args.message,
                }

    return read.definition.url
            .replace('{message}', parsedArgs.message.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MessageController::read
 * @see app/Http/Controllers/MessageController.php:43
 * @route '/admin/messages/{message}/read'
 */
read.patch = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: read.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MessageController::read
 * @see app/Http/Controllers/MessageController.php:43
 * @route '/admin/messages/{message}/read'
 */
    const readForm = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: read.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MessageController::read
 * @see app/Http/Controllers/MessageController.php:43
 * @route '/admin/messages/{message}/read'
 */
        readForm.patch = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: read.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    read.form = readForm
/**
* @see \App\Http\Controllers\MessageController::unread
 * @see app/Http/Controllers/MessageController.php:54
 * @route '/admin/messages/{message}/unread'
 */
export const unread = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: unread.url(args, options),
    method: 'patch',
})

unread.definition = {
    methods: ["patch"],
    url: '/admin/messages/{message}/unread',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MessageController::unread
 * @see app/Http/Controllers/MessageController.php:54
 * @route '/admin/messages/{message}/unread'
 */
unread.url = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { message: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { message: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    message: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        message: typeof args.message === 'object'
                ? args.message.id
                : args.message,
                }

    return unread.definition.url
            .replace('{message}', parsedArgs.message.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MessageController::unread
 * @see app/Http/Controllers/MessageController.php:54
 * @route '/admin/messages/{message}/unread'
 */
unread.patch = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: unread.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MessageController::unread
 * @see app/Http/Controllers/MessageController.php:54
 * @route '/admin/messages/{message}/unread'
 */
    const unreadForm = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: unread.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MessageController::unread
 * @see app/Http/Controllers/MessageController.php:54
 * @route '/admin/messages/{message}/unread'
 */
        unreadForm.patch = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: unread.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    unread.form = unreadForm
/**
* @see \App\Http\Controllers\MessageController::destroy
 * @see app/Http/Controllers/MessageController.php:65
 * @route '/admin/messages/{message}'
 */
export const destroy = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/messages/{message}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MessageController::destroy
 * @see app/Http/Controllers/MessageController.php:65
 * @route '/admin/messages/{message}'
 */
destroy.url = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { message: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { message: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    message: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        message: typeof args.message === 'object'
                ? args.message.id
                : args.message,
                }

    return destroy.definition.url
            .replace('{message}', parsedArgs.message.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MessageController::destroy
 * @see app/Http/Controllers/MessageController.php:65
 * @route '/admin/messages/{message}'
 */
destroy.delete = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MessageController::destroy
 * @see app/Http/Controllers/MessageController.php:65
 * @route '/admin/messages/{message}'
 */
    const destroyForm = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MessageController::destroy
 * @see app/Http/Controllers/MessageController.php:65
 * @route '/admin/messages/{message}'
 */
        destroyForm.delete = (args: { message: string | number | { id: string | number } } | [message: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const messages = {
    index: Object.assign(index, index),
delete: Object.assign(deleteMethod, deleteMethod),
read: Object.assign(read, read),
unread: Object.assign(unread, unread),
destroy: Object.assign(destroy, destroy),
}

export default messages