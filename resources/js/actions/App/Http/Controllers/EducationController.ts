import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\EducationController::index
 * @see app/Http/Controllers/EducationController.php:13
 * @route '/admin/educations'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/educations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EducationController::index
 * @see app/Http/Controllers/EducationController.php:13
 * @route '/admin/educations'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EducationController::index
 * @see app/Http/Controllers/EducationController.php:13
 * @route '/admin/educations'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EducationController::index
 * @see app/Http/Controllers/EducationController.php:13
 * @route '/admin/educations'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\EducationController::index
 * @see app/Http/Controllers/EducationController.php:13
 * @route '/admin/educations'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\EducationController::index
 * @see app/Http/Controllers/EducationController.php:13
 * @route '/admin/educations'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\EducationController::index
 * @see app/Http/Controllers/EducationController.php:13
 * @route '/admin/educations'
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
* @see \App\Http\Controllers\EducationController::create
 * @see app/Http/Controllers/EducationController.php:22
 * @route '/admin/educations/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/educations/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EducationController::create
 * @see app/Http/Controllers/EducationController.php:22
 * @route '/admin/educations/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EducationController::create
 * @see app/Http/Controllers/EducationController.php:22
 * @route '/admin/educations/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EducationController::create
 * @see app/Http/Controllers/EducationController.php:22
 * @route '/admin/educations/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\EducationController::create
 * @see app/Http/Controllers/EducationController.php:22
 * @route '/admin/educations/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\EducationController::create
 * @see app/Http/Controllers/EducationController.php:22
 * @route '/admin/educations/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\EducationController::create
 * @see app/Http/Controllers/EducationController.php:22
 * @route '/admin/educations/create'
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
* @see \App\Http\Controllers\EducationController::store
 * @see app/Http/Controllers/EducationController.php:41
 * @route '/admin/educations'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/educations',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EducationController::store
 * @see app/Http/Controllers/EducationController.php:41
 * @route '/admin/educations'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EducationController::store
 * @see app/Http/Controllers/EducationController.php:41
 * @route '/admin/educations'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\EducationController::store
 * @see app/Http/Controllers/EducationController.php:41
 * @route '/admin/educations'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EducationController::store
 * @see app/Http/Controllers/EducationController.php:41
 * @route '/admin/educations'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\EducationController::edit
 * @see app/Http/Controllers/EducationController.php:27
 * @route '/admin/educations/{education}/edit'
 */
export const edit = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/educations/{education}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EducationController::edit
 * @see app/Http/Controllers/EducationController.php:27
 * @route '/admin/educations/{education}/edit'
 */
edit.url = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { education: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    education: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        education: typeof args.education === 'object'
                ? args.education.id
                : args.education,
                }

    return edit.definition.url
            .replace('{education}', parsedArgs.education.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EducationController::edit
 * @see app/Http/Controllers/EducationController.php:27
 * @route '/admin/educations/{education}/edit'
 */
edit.get = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EducationController::edit
 * @see app/Http/Controllers/EducationController.php:27
 * @route '/admin/educations/{education}/edit'
 */
edit.head = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\EducationController::edit
 * @see app/Http/Controllers/EducationController.php:27
 * @route '/admin/educations/{education}/edit'
 */
    const editForm = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\EducationController::edit
 * @see app/Http/Controllers/EducationController.php:27
 * @route '/admin/educations/{education}/edit'
 */
        editForm.get = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\EducationController::edit
 * @see app/Http/Controllers/EducationController.php:27
 * @route '/admin/educations/{education}/edit'
 */
        editForm.head = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\EducationController::update
 * @see app/Http/Controllers/EducationController.php:51
 * @route '/admin/educations/{education}'
 */
export const update = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/educations/{education}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\EducationController::update
 * @see app/Http/Controllers/EducationController.php:51
 * @route '/admin/educations/{education}'
 */
update.url = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { education: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    education: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        education: typeof args.education === 'object'
                ? args.education.id
                : args.education,
                }

    return update.definition.url
            .replace('{education}', parsedArgs.education.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EducationController::update
 * @see app/Http/Controllers/EducationController.php:51
 * @route '/admin/educations/{education}'
 */
update.put = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\EducationController::update
 * @see app/Http/Controllers/EducationController.php:51
 * @route '/admin/educations/{education}'
 */
    const updateForm = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EducationController::update
 * @see app/Http/Controllers/EducationController.php:51
 * @route '/admin/educations/{education}'
 */
        updateForm.put = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\EducationController::deleteMethod
 * @see app/Http/Controllers/EducationController.php:34
 * @route '/admin/educations/{education}/delete'
 */
export const deleteMethod = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

deleteMethod.definition = {
    methods: ["get","head"],
    url: '/admin/educations/{education}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EducationController::deleteMethod
 * @see app/Http/Controllers/EducationController.php:34
 * @route '/admin/educations/{education}/delete'
 */
deleteMethod.url = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { education: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    education: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        education: typeof args.education === 'object'
                ? args.education.id
                : args.education,
                }

    return deleteMethod.definition.url
            .replace('{education}', parsedArgs.education.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EducationController::deleteMethod
 * @see app/Http/Controllers/EducationController.php:34
 * @route '/admin/educations/{education}/delete'
 */
deleteMethod.get = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EducationController::deleteMethod
 * @see app/Http/Controllers/EducationController.php:34
 * @route '/admin/educations/{education}/delete'
 */
deleteMethod.head = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleteMethod.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\EducationController::deleteMethod
 * @see app/Http/Controllers/EducationController.php:34
 * @route '/admin/educations/{education}/delete'
 */
    const deleteMethodForm = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: deleteMethod.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\EducationController::deleteMethod
 * @see app/Http/Controllers/EducationController.php:34
 * @route '/admin/educations/{education}/delete'
 */
        deleteMethodForm.get = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deleteMethod.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\EducationController::deleteMethod
 * @see app/Http/Controllers/EducationController.php:34
 * @route '/admin/educations/{education}/delete'
 */
        deleteMethodForm.head = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\EducationController::destroy
 * @see app/Http/Controllers/EducationController.php:59
 * @route '/admin/educations/{education}'
 */
export const destroy = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/educations/{education}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\EducationController::destroy
 * @see app/Http/Controllers/EducationController.php:59
 * @route '/admin/educations/{education}'
 */
destroy.url = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { education: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { education: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    education: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        education: typeof args.education === 'object'
                ? args.education.id
                : args.education,
                }

    return destroy.definition.url
            .replace('{education}', parsedArgs.education.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EducationController::destroy
 * @see app/Http/Controllers/EducationController.php:59
 * @route '/admin/educations/{education}'
 */
destroy.delete = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\EducationController::destroy
 * @see app/Http/Controllers/EducationController.php:59
 * @route '/admin/educations/{education}'
 */
    const destroyForm = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EducationController::destroy
 * @see app/Http/Controllers/EducationController.php:59
 * @route '/admin/educations/{education}'
 */
        destroyForm.delete = (args: { education: string | number | { id: string | number } } | [education: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const EducationController = { index, create, store, edit, update, deleteMethod, destroy, delete: deleteMethod }

export default EducationController