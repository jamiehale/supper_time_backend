"""empty message

Revision ID: 087ea7a33975
Revises: 558b22ff634c
Create Date: 2022-08-28 15:04:22.436055

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '087ea7a33975'
down_revision = '558b22ff634c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.String(), nullable=False),
    sa.Column('first_name', sa.String(length=150), nullable=True),
    sa.Column('last_name', sa.String(length=150), nullable=True),
    sa.Column('email', sa.String(length=150), nullable=False),
    sa.Column('password', sa.String(), nullable=True),
    sa.Column('g_auth_verify', sa.Boolean(), nullable=True),
    sa.Column('token', sa.String(), nullable=True),
    sa.Column('date_created', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('token')
    )
    op.create_table('recipe',
    sa.Column('id', sa.String(), nullable=False),
    sa.Column('recipe_name', sa.String(length=250), nullable=False),
    sa.Column('api_id', sa.String(length=15), nullable=True),
    sa.Column('user_token', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['user_token'], ['user.token'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('recipe')
    op.drop_table('user')
    # ### end Alembic commands ###
