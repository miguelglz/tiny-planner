import React, { SFC } from 'react';
import { Input, Row, Col, Button, Form, Checkbox, Card } from 'antd';
import { isNil } from 'lodash';
import StyledSelect from '../../components/StyledSelect';
import { searchOptions } from '../../helpers/constants';
import s from './RecipeSearchForm.module.scss';

export interface RecipeSearchFormProps {
  onSearch: (queryParams: any) => Promise<void>;
  recipes?: any;
  checkBoxChange: (selectedRecipeIds: any) => void;
  selectedRecipes: Array<object>;
}

const RecipeSearchForm: SFC<RecipeSearchFormProps> = ({
  onSearch,
  recipes,
  checkBoxChange,
  selectedRecipes,
}) => {
  const { Search } = Input;
  const { Meta } = Card;
  const submitValues = (values: any) => {
    Object.keys(values).forEach((key) => {
      if (isNil(values[key])) delete values[key];
    });
    onSearch(values);
  };

  return (
    <>
      <Form onFinish={submitValues} data-testid="search-form" className={s.formStyle}>
        <Row gutter={[0, 16]}>
          <Col span={24} className={`u-full-width ${s.boldStyle}`}>
            Search Recipes
          </Col>
        </Row>
        <Row gutter={[0, 16]}>
          <Col span={24}>
            <Form.Item
              name="q"
              rules={[{ required: true, message: 'Please input a search.' }]}
            >
              <Search
                type="text"
                name="q"
                placeholder="Input a meal name, for example: eggs."
                enterButton
                data-testid="search-query-input"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[0, 16]}>
          <Col span={7}>
            <Form.Item name="diet">
              <StyledSelect
                options={searchOptions.diets}
                placeholder={'Select a diet...'}
              />
            </Form.Item>
          </Col>
          <Col span={8} offset={1}>
            <Form.Item name="dishType">
              <StyledSelect
                options={searchOptions.dishes}
                placeholder={'Select a dish type...'}
              />
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item name="cuisineType">
              <StyledSelect
                options={searchOptions.cuisines}
                placeholder={'Select a cuisine type...'}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[0, 16]}>
          <Col>
            <Button
              type="primary"
              htmlType="submit"
              data-testid="submit-button"
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      {!isNil(recipes) && (
        <>
          <Row gutter={[0, 16]}>
            <Col span={24} className={`u-full-width ${s.boldStyle}`}>
              {recipes.length > 0
                ? 'Select meals for your plan.'
                : 'No meals found.'}
            </Col>
          </Row>
          {recipes.length > 0 && (
            <Row gutter={[0, 16]}>
              <Col span={24}>
                <Checkbox.Group
                  options={recipes}
                  onChange={checkBoxChange}
                />
              </Col>
            </Row>
          )}
        </>
      )}
      {selectedRecipes.length > 0 && (
        <>
          <Row gutter={[0, 16]}>
            <Col span={24} className={`u-full-width ${s.boldStyle}`}>
              Selected Plan
            </Col>
          </Row>
          <Row gutter={[0, 16]}>
            {selectedRecipes.map((recipe: any) => (
              <Col span={7} offset={1} key={recipe.id}>
                <Card
                  hoverable
                  cover={<img src={recipe.image} alt={recipe.label} />}
                >
                  <Meta
                    title={recipe.label}
                    description={
                      recipe.ingredientLines
                        ? recipe.ingredientLines.join(', ')
                        : null
                    }
                    className={s.cardDescription}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default RecipeSearchForm;
