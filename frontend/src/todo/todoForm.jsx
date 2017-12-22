import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {

    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if(e.key === 'Escape'){
            props.handleClear()
        }
    }

    return (
        <div>
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input
                        id='description'
                        value={props.description}
                        onChange={props.handleChange}
                        onKeyUp={keyHandler}
                        className='form-control'
                        placeholder='Adicione uma tarefa...'
                    />
                </Grid>

                <Grid cols='12 3 2'>
                    <IconButton hide={false} onClick={props.handleAdd} style='primary' icon='plus' />
                    <IconButton hide={false} onClick={props.handleSearch} style='info' icon='search' />
                    <IconButton hide={false} onClick={props.handleClear} style='default' icon='close' />
                </Grid>
            </div>
        </div>
    )
}