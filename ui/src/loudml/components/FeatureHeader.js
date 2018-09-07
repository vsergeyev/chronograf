import React from 'react'
import PropTypes from 'prop-types'

import ConfirmButtons from 'shared/components/ConfirmButtons'
import DeleteConfirmButtons from '../../shared/components/DeleteConfirmButtons';

const FeatureHeader = ({
  feature,
  onEdit,
  onKeyDown,
  onConfirm,
  // onCancel,
  onDelete,
  disabled,
}) => {
  if (feature.isEditing) {
    return (
      <EditHeader
        feature={feature}
        onEdit={onEdit}
        onKeyDown={onKeyDown}
        onConfirm={onConfirm}
        onCancel={onDelete}
      />
    )
  }

  return (
    <Header
      feature={feature}
      onDelete={onDelete}
      disabled={disabled}
    />
  )
}

const Header = ({
    feature,
    onDelete,
    disabled,
}) => {

    return (
        <div className="db-manager-header">
            <h4>{feature.name}</h4>
            <div className="db-manager-header--actions text-right">
                {disabled
                ?null
                :(
                <DeleteConfirmButtons
                    item={feature}
                    onDelete={onDelete}
                    // onCancel={onCancel}
                    buttonSize="btn-xs"
                />)}
            </div>
        </div>
    )
}

const EditHeader = ({
    feature,
    onEdit,
    onKeyDown,
    onConfirm,
    onCancel
}) => (
  <div className="db-manager-header db-manager-header--edit">
    <input
      className="form-control input-sm"
      name="name"
      type="text"
      value={feature.name}
      placeholder="Name this Feature"
      onChange={onEdit(feature)}
      onKeyDown={onKeyDown(feature)}
      autoFocus={true}
      spellCheck={false}
      autoComplete={false}
    />
    <ConfirmButtons item={feature} onConfirm={onConfirm} onCancel={onCancel} />
  </div>
)

const {func, shape, bool} = PropTypes

FeatureHeader.propTypes = {
  onEdit: func,
  feature: shape(),
  onKeyDown: func,
  // onCancel: func,
  onDelete: func,
  onConfirm: func,
  disabled: bool.isRequired,
}

Header.propTypes = {
  // onConfirm: func,
  onCancel: func,
  onDelete: func,
  feature: shape(),
  disabled: bool.isRequired,
}

EditHeader.propTypes = {
  feature: shape(),
  onEdit: func,
  onKeyDown: func,
  onCancel: func,
  onConfirm: func,
}

export default FeatureHeader