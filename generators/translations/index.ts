/*
Copyright 2019 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
*/
import Generator from 'yeoman-generator'

export = class extends Generator {
	public options: {
		localeTag?: string
	} = {}

	public constructor(args: string | string[], opts: {}) {
		super(args, opts)
		this.argument('localeTag', { type: String })
	}

	public writing() {
		this.fs.copy(
			this.destinationPath('src/translations/en.json'),
			this.destinationPath(
				`src/translations/${this.options.localeTag}.json`,
			),
		)
	}
}