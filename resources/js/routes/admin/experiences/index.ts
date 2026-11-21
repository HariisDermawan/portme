import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\ExperienceController::index
 * @see app/Http/Controllers/ExperienceController.php:13
 * @route '/admin/experiences'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/experiences',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExperienceController::index
 * @see app/Http/Controllers/ExperienceController.php:13
 * @route '/admin/experiences'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExperienceController::index
 * @see app/Http/Controllers/ExperienceController.php:13
 * @route '/admin/experiences'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ExperienceController::index
 * @see app/Http/Controllers/ExperienceController.php:13
 * @route '/admin/experiences'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ExperienceController::index
 * @see app/Http/Controllers/ExperienceController.php:13
 * @route '/admin/experiences'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ExperienceController::index
 * @see app/Http/Controllers/ExperienceController.php:13
 * @route '/admin/experiences'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ExperienceController::index
 * @see app/Http/Controllers/ExperienceController.php:13
 * @route '/admin/experiences'
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
* @see \App\Http\Controllers\ExperienceController::create
 * @see app/Http/Controllers/ExperienceController.php:22
 * @route '/admin/experiences/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/experiences/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExperienceController::create
 * @see app/Http/Controllers/ExperienceController.php:22
 * @route '/admin/experiences/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExperienceController::create
 * @see app/Http/Controllers/ExperienceController.php:22
 * @route '/admin/experiences/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ExperienceController::create
 * @see app/Http/Controllers/ExperienceController.php:22
 * @route '/admin/experiences/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ExperienceController::create
 * @see app/Http/Controllers/ExperienceController.php:22
 * @route '/admin/experiences/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ExperienceController::create
 * @see app/Http/Controllers/ExperienceController.php:22
 * @route '/admin/experiences/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ExperienceController::create
 * @see app/Http/Controllers/ExperienceController.php:22
 * @route '/admin/experiences/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\ExperienceController::store
 * @see app/Http/Controllers/ExperienceController.php:41
 * @route '/admin/experiences'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/experiences',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ExperienceController::store
 * @see app/Http/Controllers/ExperienceController.php:41
 * @route '/admin/experiences'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExperienceController::store
 * @see app/Http/Controllers/ExperienceController.php:41
 * @route '/admin/experiences'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ExperienceController::store
 * @see app/Http/Controllers/ExperienceController.php:41
 * @route '/admin/experiences'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ExperienceController::store
 * @see app/Http/Controllers/ExperienceController.php:41
 * @route '/admin/experiences'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ExperienceController::edit
 * @see app/Http/Controllers/ExperienceController.php:27
 * @route '/admin/experiences/{experience}/edit'
 */
export const edit = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/experiences/{experience}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExperienceController::edit
 * @see app/Http/Controllers/ExperienceController.php:27
 * @route '/admin/experiences/{experience}/edit'
 */
edit.url = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { experience: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { experience: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    experience: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        experience: typeof args.experience === 'object'
                ? args.experience.id
                : args.experience,
                }

    return edit.definition.url
            .replace('{experience}', parsedArgs.experience.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExperienceController::edit
 * @see app/Http/Controllers/ExperienceController.php:27
 * @route '/admin/experiences/{experience}/edit'
 */
edit.get = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ExperienceController::edit
 * @see app/Http/Controllers/ExperienceController.php:27
 * @route '/admin/experiences/{experience}/edit'
 */
edit.head = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ExperienceController::edit
 * @see app/Http/Controllers/ExperienceController.php:27
 * @route '/admin/experiences/{experience}/edit'
 */
    const editForm = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ExperienceController::edit
 * @see app/Http/Controllers/ExperienceController.php:27
 * @route '/admin/experiences/{experience}/edit'
 */
        editForm.get = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ExperienceController::edit
 * @see app/Http/Controllers/ExperienceController.php:27
 * @route '/admin/experiences/{experience}/edit'
 */
        editForm.head = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\ExperienceController::update
 * @see app/Http/Controllers/ExperienceController.php:51
 * @route '/admin/experiences/{experience}'
 */
export const update = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/experiences/{experience}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ExperienceController::update
 * @see app/Http/Controllers/ExperienceController.php:51
 * @route '/admin/experiences/{experience}'
 */
update.url = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { experience: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { experience: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    experience: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        experience: typeof args.experience === 'object'
                ? args.experience.id
                : args.experience,
                }

    return update.definition.url
            .replace('{experience}', parsedArgs.experience.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExperienceController::update
 * @see app/Http/Controllers/ExperienceController.php:51
 * @route '/admin/experiences/{experience}'
 */
update.put = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\ExperienceController::update
 * @see app/Http/Controllers/ExperienceController.php:51
 * @route '/admin/experiences/{experience}'
 */
    const updateForm = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ExperienceController::update
 * @see app/Http/Controllers/ExperienceController.php:51
 * @route '/admin/experiences/{experience}'
 */
        updateForm.put = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\ExperienceController::deleteMethod
 * @see app/Http/Controllers/ExperienceController.php:34
 * @route '/admin/experiences/{experience}/delete'
 */
export const deleteMethod = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

deleteMethod.definition = {
    methods: ["get","head"],
    url: '/admin/experiences/{experience}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExperienceController::deleteMethod
 * @see app/Http/Controllers/ExperienceController.php:34
 * @route '/admin/experiences/{experience}/delete'
 */
deleteMethod.url = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { experience: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { experience: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    experience: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        experience: typeof args.experience === 'object'
                ? args.experience.id
                : args.experience,
                }

    return deleteMethod.definition.url
            .replace('{experience}', parsedArgs.experience.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExperienceController::deleteMethod
 * @see app/Http/Controllers/ExperienceController.php:34
 * @route '/admin/experiences/{experience}/delete'
 */
deleteMethod.get = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ExperienceController::deleteMethod
 * @see app/Http/Controllers/ExperienceController.php:34
 * @route '/admin/experiences/{experience}/delete'
 */
deleteMethod.head = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleteMethod.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ExperienceController::deleteMethod
 * @see app/Http/Controllers/ExperienceController.php:34
 * @route '/admin/experiences/{experience}/delete'
 */
    const deleteMethodForm = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: deleteMethod.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ExperienceController::deleteMethod
 * @see app/Http/Controllers/ExperienceController.php:34
 * @route '/admin/experiences/{experience}/delete'
 */
        deleteMethodForm.get = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deleteMethod.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ExperienceController::deleteMethod
 * @see app/Http/Controllers/ExperienceController.php:34
 * @route '/admin/experiences/{experience}/delete'
 */
        deleteMethodForm.head = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ExperienceController::destroy
 * @see app/Http/Controllers/ExperienceController.php:59
 * @route '/admin/experiences/{experience}'
 */
export const destroy = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/experiences/{experience}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ExperienceController::destroy
 * @see app/Http/Controllers/ExperienceController.php:59
 * @route '/admin/experiences/{experience}'
 */
destroy.url = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { experience: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { experience: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    experience: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        experience: typeof args.experience === 'object'
                ? args.experience.id
                : args.experience,
                }

    return destroy.definition.url
            .replace('{experience}', parsedArgs.experience.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExperienceController::destroy
 * @see app/Http/Controllers/ExperienceController.php:59
 * @route '/admin/experiences/{experience}'
 */
destroy.delete = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ExperienceController::destroy
 * @see app/Http/Controllers/ExperienceController.php:59
 * @route '/admin/experiences/{experience}'
 */
    const destroyForm = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ExperienceController::destroy
 * @see app/Http/Controllers/ExperienceController.php:59
 * @route '/admin/experiences/{experience}'
 */
        destroyForm.delete = (args: { experience: string | number | { id: string | number } } | [experience: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const experiences = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
delete: Object.assign(deleteMethod, deleteMethod),
destroy: Object.assign(destroy, destroy),
}

export default experiences